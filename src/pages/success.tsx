import { stripe } from "@/lib/stripe";
import { SuccessContainer, ImageContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Stripe from "stripe";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
    description: string;
  } | null;
}

export default function success({ product, customerName }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite shop</title>
      </Head>
      <SuccessContainer>
        <h1>Compra Efetuada</h1>
        <ImageContainer>
          <Image
            src={product?.imageUrl || ""}
            alt={product?.name || ""}
            width={120}
            height={110}
          />
        </ImageContainer>
        <p>
          Uhuul <strong>{customerName}</strong>, sua{" "}
          <strong>{product?.name}</strong> já está a caminho da sua casa.
        </p>
        <Link href="/" prefetch={false}>
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  if (!sessionId) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });
  const customerName = session.customer_details?.name;
  const lineItem = session.line_items?.data[0];
  const product = (lineItem?.price?.product as Stripe.Product) || null;
  return {
    props: {
      customerName,
      product: product
        ? {
            name: product.name,
            imageUrl: product.images[0],
            description: product.description,
          }
        : null,
    },
  };
};
