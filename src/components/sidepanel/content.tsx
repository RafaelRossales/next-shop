import React from "react";
import { SidePanelCartProducts, SidePanelContent } from "./style";
import CartItem from "../cart/item";

export default function Content() {
  return (
    <SidePanelContent>
      <h1>Sacola de Compras</h1>
      <SidePanelCartProducts>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </SidePanelCartProducts>
    </SidePanelContent>
  );
}
