import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_LEY!, {
  apiVersion: "2025-05-28.basil",
  typescript: true,
  maxNetworkRetries: 3,
  appInfo: {
    name: "Ignite Shop",
  },
});
