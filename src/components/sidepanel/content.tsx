import React from "react";
import { SidePanelContent } from "./style";
import CartList from "../cart/list";

export default function Content() {
  return (
    <SidePanelContent>
      <h1>Sacola de Compras</h1>
      <CartList />
    </SidePanelContent>
  );
}
