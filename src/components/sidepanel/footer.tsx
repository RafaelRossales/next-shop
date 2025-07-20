import React from "react";
import {
  SidePanelFooter,
  SidePanelFooterActions,
  SidePanelFooterDetails,
} from "./style";

export default function Footer() {
  return (
    <SidePanelFooter>
      <SidePanelFooterDetails>
        <div className="quantity-details-style">
          <span>Quantidade</span>
          <span> 3 itens</span>
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
