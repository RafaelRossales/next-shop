import React from "react";
import { ImageContainer, ProductContainer, ProductDetails } from "../product";

import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import axios from "axios";
import Head from "next/head";

interface IProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: IProductProps) {
  async function handleBuyNow() {
    try {
      const response = await axios.post("/api/stripe", {
        priceId: product.defaultPriceId,
      });
      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (error) {
      alert("Error creating checkout session");
      console.error("Checkout session error:", error);
    }
  }
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt={""} />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button onClick={handleBuyNow}>Comprar agora</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id;
  const product = await stripe.products.retrieve(productId!, {
    expand: ["default_price"],
  });
  const price = product.default_price as Stripe.Price;
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format((price?.unit_amount ?? 0) / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour of caching product information
  };
};
