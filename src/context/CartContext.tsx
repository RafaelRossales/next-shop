import { CartAction, cartReducer, CartState } from "@/reducers/cartReducer";
import React, { useReducer, Dispatch } from "react";

interface CartContextType {
  cart: CartState;
  dispatch: Dispatch<CartAction>;
}

export const CartContext = React.createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<React.PropsWithChildren<object>> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
    quantity: 0,
    total: 0,
  });

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
