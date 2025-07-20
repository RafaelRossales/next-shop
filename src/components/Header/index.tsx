"use client";
import React from "react";
import { Header } from "@/styles/pages/styles";
import Image from "next/image";
import logoImage from "@/assets/logo.svg";
import bagIcon from "@/assets/bag.png";
import { useSidePanel } from "@/context/SidePanelContext";
import { useCart } from "@/context/CartContext";

export default function HeaderComponent() {
  const { onClose } = useSidePanel();
  const { cart } = useCart();
  return (
    <>
      <Header>
        <Image src={logoImage} alt="Logo" />
        <div>
          {cart.quantity > 0 && (
            <span className="badget-style">{cart.quantity}</span>
          )}
          <div className="cart-btn" onClick={() => onClose(true)}>
            <Image src={bagIcon} alt="bag-icon" />
          </div>
        </div>
      </Header>
    </>
  );
}
