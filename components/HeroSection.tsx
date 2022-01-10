import React from "react";
import Image from "next/image";

import logo from "../images/logo.svg";
import styles from "../styles/hero.module.scss";

const HeroSection = (): JSX.Element => {
  return (
    <main className={styles.hero}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video autoPlay loop muted className={styles["hero-vid"]}>
        <source src="/home.mp4" type="video/mp4" />
      </video>
      <div className={styles["hero-logo"]}>
        <Image loading="lazy" src={logo} width={246} height={67} />
      </div>
    </main>
  );
};

export default HeroSection;
