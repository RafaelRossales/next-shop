import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

type ProductType = {
  id: string;
  name: string;
  imageUrl: string;
  priceId: string;
  price: string;
};

interface HomeProps {
  products: ProductType[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
        <meta
          name="description"
          content="A simple e-commerce application built with Next.js and Stripe."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer ref={sliderRef}>
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="keen-slider__slide"
              prefetch={false}
            >
              <Product key={product.id}>
                <Image
                  src={product.imageUrl}
                  width={520}
                  height={480}
                  alt={product.name}
                />
                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });
  const products: Array<ProductType> = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      priceId: price?.id ?? "",
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format((price?.unit_amount ?? 0) / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
