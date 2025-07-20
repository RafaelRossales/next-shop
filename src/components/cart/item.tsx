import React from "react";
import {
  ItemActions,
  ItemContainer,
  ItemContent,
  ItemDetails,
  ItemImage,
} from "./style";
import Image from "next/image";
import { IProduct } from "@/types";

interface ICartItemProps {
  product: IProduct;
}

export default function CartItem({ product }: ICartItemProps) {
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
          <div>Remover</div>
        </ItemActions>
      </ItemContent>
    </ItemContainer>
  );
}
