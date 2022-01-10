import React from "react";
import Image from "next/image";

import styles from "../styles/goober_anatomy.module.scss";
import anatomy_svg from "../images/GooberAnatomy.svg";

const GooberAnatomy = (): JSX.Element => {
  return (
    <>
      <section className={styles.goober__anatomy}>
        <div className={styles["anatomy__image"]}>
          <Image src={anatomy_svg} draggable={"false"} />
        </div>
      </section>
    </>
  );
};

export default GooberAnatomy;
