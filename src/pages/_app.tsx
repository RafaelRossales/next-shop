import { globalStyles } from "@/styles/global";
import { Container } from "@/styles/pages/styles";
import type { AppProps } from "next/app";

import { SidePanelProvider } from "@/context/SidePanelContext";
import { CartProvider } from "@/context/CartContext";
import HeaderComponent from "@/components/Header";
import SidePanel from "@/components/sidepanel";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidePanelProvider>
      <CartProvider>
        <HeaderComponent />
        <SidePanel />
        <Container>{<Component {...pageProps} />}</Container>
      </CartProvider>
    </SidePanelProvider>
  );
}

export default MyApp;
