import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/styles";
import type { AppProps } from "next/app";
import logoImage from "@/assets/logo.svg";
import Image from "next/image";
import { SidePanelProvider } from "@/context/SidePanelContext";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidePanelProvider>
      <Header>
        <Image src={logoImage} alt="Logo" />
      </Header>
      <Container>{<Component {...pageProps} />}</Container>
    </SidePanelProvider>
  );
}

export default MyApp;
