import React from "react";
import { SidePanelHeader } from "./style";
import Image from "next/image";
import closeIcon from "@/assets/close.png";
import { useSidePanel } from "@/context/SidePanelContext";

export default function Header() {
  const { onClose } = useSidePanel();
  return (
    <SidePanelHeader>
      <Image
        src={closeIcon}
        alt="Logo"
        width={25}
        height={25}
        onClick={() => onClose(false)}
      />
    </SidePanelHeader>
  );
}
