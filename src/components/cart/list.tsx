import React from "react";
import { ListItems } from "./style";
import CartItem from "./item";
import { useCart } from "@/context/CartContext";
import { IProduct } from "@/types";

export default function CartList() {
  const { cart } = useCart();
  return (
    <ListItems>
      {cart.items.map((product: IProduct, index: number) => (
        <CartItem key={index} product={product} />
      ))}
    </ListItems>
  );
}
