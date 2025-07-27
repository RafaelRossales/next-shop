import React, { useState } from "react";
import { SidePanelContainer } from "./style";

import Footer from "./footer";
import Content from "./content";
import Header from "./header";
import { useSidePanel } from "@/context/SidePanelContext";
import { useCart } from "@/context/CartContext";

export default function SidePanel() {
  const { isOpen } = useSidePanel();
  const { cart } = useCart();

  const [showCheckOutSession, setShowCheckOutSession] = useState<boolean>(true);

  React.useEffect(() => {
    setShowCheckOutSession(cart.items.length === 0);
  }, [cart.items.length]);

  return (
    isOpen && (
      <SidePanelContainer>
        <Header />
        <Content />
        {!showCheckOutSession && <Footer />}
      </SidePanelContainer>
    )
  );
}
