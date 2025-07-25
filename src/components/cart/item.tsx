import React from "react";
import {
  ItemActions,
  ItemContainer,
  ItemContent,
  ItemDetails,
  ItemImage,
  QuantityControl,
} from "./style";
import Image from "next/image";
import { IProduct } from "@/types";
import { useCart } from "@/context/CartContext";
import { ACTIONS } from "@/reducers/actions";
import { IProductProps } from "@/pages/product/[id]";

interface ICartItemProps {
  product: IProduct;
}

export default function CartItem({ product }: ICartItemProps) {
  const cartContext = useCart();
  const { dispatch } = cartContext as {
    dispatch: React.Dispatch<{ type: string; payload: unknown }>;
  };
  const incrementProduct = ({ product }: IProductProps) => {
    dispatch({
      type: ACTIONS.INCREMENT_ITEM,
      payload: product,
    });
  };

  const removeProduct = ({ product }: IProductProps) => {
    dispatch({
      type: ACTIONS.REMOVE_ITEM,
      payload: product,
    });
  };

  return (
    <ItemContainer>
      <ItemImage>
        <Image src={product.imageUrl} width={100} height={93} alt={""} />
      </ItemImage>
      <ItemContent>
        <ItemDetails>
          <h2>{product.name}</h2>
          <span>{product.price}</span>
        </ItemDetails>
        <ItemActions>
          <QuantityControl>
            <span onClick={() => removeProduct({ product })}>-</span>
            <p>{product.quantity}</p>
            <span onClick={() => incrementProduct({ product })}>+</span>
          </QuantityControl>
          <div>Remover</div>
        </ItemActions>
      </ItemContent>
    </ItemContainer>
  );
}
