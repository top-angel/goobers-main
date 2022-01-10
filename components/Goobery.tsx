import React, { useState, useEffect } from "react";
("");

import styles from "../styles/goobery.module.scss";

const Goobery = (): JSX.Element => {
  const [sliderPixels, setSliderPixels] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderPixels((sliderPixels) => sliderPixels - 1);
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className={styles.goobery__factory}>
        <div className={styles["goobery__header"]}>
          <p>The Goobery</p>
        </div>
        <div className={styles["goobery__carousel"]}>
          <div
            className={styles["goobery__carousel--slider"]}
            style={{ backgroundPosition: `${sliderPixels}px 0px` }}
          ></div>
        </div>
        <a href="https://opensea.io/collection/thegoobers" className={styles["view__all--btn"]}>
          View All
        </a>
      </section>
    </>
  );
};

export default Goobery;
