import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";

import { getLibrary } from "../utils/providers";
import { useEagerConnect } from "../hooks/useEagerConnect";

import "../styles/style.scss";
import { DialogProvider } from "../hooks/useDialog";

const Connect: React.FC = ({ children }) => {
  useEagerConnect();

  return <>{children}</>;
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <DialogProvider>
        <Connect>
          <Head>
            <title>Goobers NFT</title>
            <meta property="og:site_name" content="CluCoin" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en" />
            <meta property="og:url" content="https://www.goobers.com/" />
            <meta name="theme-color" content="#47F066" />
            <meta
              property="description"
              content="Goobers are a collection of 15,000 entirely unique and randomized NFTs, provided and stored on the Ethereum blockchain. Each Goober sports a number of accessories, outfits, animations, and whatever they have claimed for a brain!"
            />
            <meta
              property="og:description"
              content="Goobers are a collection of 15,000 entirely unique and randomized NFTs, provided and stored on the Ethereum blockchain. Each Goober sports a number of accessories, outfits, animations, and whatever they have claimed for a brain!"
            />
            <meta property="og:title" content="Goobers" />
            {/* <meta
              property="og:image"
              content="https://cdn.clucoin.com/Goober_Header_Updated_copy_6b313671a5.jpg"
            /> */}
          </Head>
          <Component {...pageProps} />
        </Connect>
      </DialogProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
