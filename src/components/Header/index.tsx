"use client";
import React from "react";
import { HeaderStyle } from "./styles";
import Image from "next/image";
import logoImage from "@/assets/logo.svg";

export default function Header() {
  return (
    <HeaderStyle>
      <Image src={logoImage} alt="Logo" />
    </HeaderStyle>
  );
}
