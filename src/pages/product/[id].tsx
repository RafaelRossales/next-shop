import React from "react";
import { ImageContainer, ProductContainer, ProductDetails } from "../product";

import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import axios from "axios";
import Head from "next/head";
import { useCart } from "@/context/CartContext";
import { ACTIONS } from "@/reducers/actions";
import { IProduct } from "@/types";

interface IProductProps {
  product: IProduct;
}

export default function Product({ product }: IProductProps) {
  const cartContext = useCart();
  const { dispatch } = cartContext as {
    dispatch: React.Dispatch<{ type: string; payload: unknown }>;
  };

  const addProduct = ({ product }: IProductProps) => {
    dispatch({
      type: ACTIONS.ADD_ITEM,
      payload: product,
    });
    alert("item adicionar com sucesso");
  };

  // async function handleBuyNow() {
  //   try {
  //     const response = await axios.post("/api/stripe", {
  //       priceId: product.defaultPriceId,
  //     });
  //     const { checkoutUrl } = response.data;
  //     window.location.href = checkoutUrl;
  //   } catch (error) {
  //     alert("Error creating checkout session");
  //     console.error("Checkout session error:", error);
  //   }
  // }
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
          <button onClick={() => addProduct({ product })}>
            Colocar na Sacola
          </button>
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
