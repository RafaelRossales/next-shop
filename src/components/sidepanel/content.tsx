import React, { useState } from "react";
import { SidePanelContent } from "./style";
import CartList from "../cart/list";
import { useCart } from "@/context/CartContext";

export default function Content() {
  const { cart } = useCart();
  const [showCheckOutSession, setShowCheckOutSession] = useState<boolean>(true);

  React.useEffect(() => {
    setShowCheckOutSession(cart.items.length === 0);
  }, [cart.items.length]);

  return (
    <SidePanelContent>
      <h1>Sacola de Compras</h1>
      {showCheckOutSession ? (
        <div className="empty-cart-message">
          <p>Hmm... parece que sua sacola está vazia!</p>
        </div>
      ) : (
        <CartList />
      )}
    </SidePanelContent>
  );
}
