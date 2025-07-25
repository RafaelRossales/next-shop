import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "@/lib/stripe";
import { IProduct } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Received request:", req.method, req.body);
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { items } = req.body as {
    items: IProduct[] | [];
  };

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Valid price ID is required" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/`,
      line_items: items,
    });

    if (session?.url) {
      return res.status(201).json({ checkoutUrl: session.url });
    }

    return res
      .status(500)
      .json({ error: "Checkout session created but no URL returned" });
  } catch (error) {
    console.error("Stripe session creation error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
