import React from "react";
import { SidePanelContainer } from "./style";

import Footer from "./footer";
import Content from "./content";
import Header from "./header";
import { useSidePanel } from "@/context/SidePanelContext";

export default function SidePanel() {
  const { isOpen } = useSidePanel();

  return (
    isOpen && (
      <SidePanelContainer>
        <Header />
        <Content />
        <Footer />
      </SidePanelContainer>
    )
  );
}
