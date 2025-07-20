import React from "react";
import { SidePanelContainer } from "./style";

import Footer from "./footer";
import Content from "./content";
import Header from "./header";

export default function SidePanel() {
  return (
    <SidePanelContainer>
      <Header />
      <Content />
      <Footer />
    </SidePanelContainer>
  );
}
