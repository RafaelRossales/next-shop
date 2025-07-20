import React from "react";
import {
  SidePanelFooter,
  SidePanelFooterActions,
  SidePanelFooterDetails,
} from "./style";
import { useCart } from "@/context/CartContext";

export default function Footer() {
  const { cart } = useCart();
  return (
    <SidePanelFooter>
      <SidePanelFooterDetails>
        <div className="quantity-details-style">
          <span>Quantidade</span>
          <span>{cart.quantity} itens</span>
        </div>
        <div className="total-cost-style">
          <span>Valor Total</span>
          <span>R$ 270,00</span>
        </div>
      </SidePanelFooterDetails>
      <SidePanelFooterActions>
        <button>Finalizar</button>
      </SidePanelFooterActions>
    </SidePanelFooter>
  );
}
