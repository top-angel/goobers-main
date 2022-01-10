import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/mint_home.module.scss";

import goober__ilustration from "../images/mint/Home/Goober.png";
import EthIcon from "../images/mint/ETH/ETH.svg";

const MintHome = React.forwardRef((props, ref): JSX.Element => {
  return (
    <>
      <section ref={ref as React.LegacyRef<HTMLElement>} className={styles.mint__home}>
        <div className={styles["container__grid"]}>
          <div className={styles["mint__header"]}>
            <div className={styles["header__title"]}>
              <p className={styles["header__title--rarity"]}>Mint your Goober</p>
            </div>
          </div>

          <div className={styles["mint__grid"]}>
            <div className={`${styles["col"]} ${styles["eth__mint"]}`}>
              <div className={styles["icon__crypto"]}>
                <Image src={EthIcon} width={143} height={239} />
              </div>
              <div className={styles["mint__action"]}>
                <Link href="/mint/eth" passHref>
                  <a className={`${styles["mint__btn--eth"]} ${styles["mint__btn"]}`}>
                    <p>Mint with eth</p>
                  </a>
                </Link>
              </div>
            </div>

            <div className={`${styles["col"]} ${styles["mint__ilustration"]}`}>
              <div className={styles["goober__ilustration"]}>
                <Image src={goober__ilustration} />
              </div>
            </div>

            <div className={`${styles["col"]} ${styles["clu__mint"]}`}>
              <div className={styles["mint__action"]}>
                <Link href="/claim" passHref>
                  <a className={`${styles["mint__btn--clu"]} ${styles["mint__btn"]}`}>
                    <p>
                      Claim <span className={`${styles["hide__mobile"]}`}>your</span> goober
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default MintHome;
