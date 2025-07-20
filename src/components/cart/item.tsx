import React from "react";
import {
  ItemActions,
  ItemContainer,
  ItemContent,
  ItemDetails,
  ItemImage,
} from "./style";
import Image from "next/image";
import camiseta1 from "@/assets/1.png";
export default function CartItem() {
  return (
    <ItemContainer>
      <ItemImage>
        <Image src={camiseta1} width={100} height={93} alt={""} />
      </ItemImage>
      <ItemContent>
        <ItemDetails>
          <h2>Camiseta Beyond Limits</h2>
          <span>R$ 79,90</span>
        </ItemDetails>
        <ItemActions>
          <div>Remover</div>
        </ItemActions>
      </ItemContent>
    </ItemContainer>
  );
}
