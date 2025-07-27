import React from "react";
import {
  SidePanelFooter,
  SidePanelFooterActions,
  SidePanelFooterDetails,
} from "./style";
import { useCart } from "@/context/CartContext";
import axios from "axios";
import { currencyFormatter } from "@/utils";

export default function Footer() {
  const { cart } = useCart();
  const totalItems = cart.items.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  async function handleCheckout() {
    try {
      if (cart.items.length === 0) {
        alert("Sua sacola está vazia");
        return;
      }
      const { data } = await axios.post("/api/stripe", {
        items: cart.items.map((item) => ({
          price: item.defaultPriceId,
          quantity: item.quantity || 1,
        })),
      });
      const { checkoutUrl } = data;
      window.location.href = checkoutUrl;
    } catch (error) {
      alert("Erro ao finalizar a compra");
      console.error("Checkout error:", error);
    }
  }

  return (
    <SidePanelFooter>
      <SidePanelFooterDetails>
        <div className="quantity-details-style">
          <span>Quantidade</span>
          <span>{totalItems} itens</span>
        </div>
        <div className="total-cost-style">
          <span>Valor Total</span>
          <span>{currencyFormatter(cart.total)}</span>
        </div>
      </SidePanelFooterDetails>
      <SidePanelFooterActions>
        <button onClick={handleCheckout}>Finalizar</button>
      </SidePanelFooterActions>
    </SidePanelFooter>
  );
}
