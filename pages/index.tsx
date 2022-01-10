import React, { useRef } from "react";
import { NextPage } from "next";

import HeroSection from "../components/HeroSection";
import TheOrigin from "../components/TheOrigin";
import Features from "../components/Features";
import GooberRarity from "../components/GooberRarity";
import Goobery from "../components/Goobery";
import GooberAnatomy from "../components/GooberAnatomy";
import GooberRoadMap from "../components/GooberRoadMap";
import Team from "../components/Team";
import MintHome from "../components/MintHome";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const ref = useRef<HTMLSpanElement>();

  const goToMint = () => {
    if (!ref.current) return;

    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroSection />
      <TheOrigin goToMint={goToMint} />
      <Features />
      <GooberRarity />
      <Goobery />
      <GooberAnatomy />
      <GooberRoadMap />
      <MintHome ref={ref} />
      <Team />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
