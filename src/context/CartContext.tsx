import { cartReducer } from "@/reducers/cartReducer";
import React, { useEffect, useReducer } from "react";

export const CartContext = React.createContext({});

export const CartProvider: React.FC<React.PropsWithChildren<object>> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a SidePanelProvider");
  }
  return context;
};
