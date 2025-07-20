import React from "react";
import { ListItems } from "./style";
import CartItem from "./item";

export default function CartList() {
  return (
    <ListItems>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </ListItems>
  );
}
