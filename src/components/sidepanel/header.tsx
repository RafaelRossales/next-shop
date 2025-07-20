import React from "react";
import { SidePanelHeader } from "./style";
import Image from "next/image";
import closeIcon from "@/assets/close.png";
export default function Header() {
  return (
    <SidePanelHeader>
      <Image src={closeIcon} alt="Logo" width={25} height={25} />
    </SidePanelHeader>
  );
}
