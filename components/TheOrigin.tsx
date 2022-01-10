import React from "react";
import Image from "next/image";

import goober__origin from "../images/gooberbottom.png";
import bottom__origin__effect from "../images/bottomgray.svg";
import styles from "../styles/theorigin.module.scss";

interface Props {
  goToMint: () => void;
}

const TheOrigin = ({ goToMint }: Props): JSX.Element => {
  return (
    <>
      <section className={styles.theorigin}>
        <div className={styles["origin__header--grid"]}>
          <p className={styles["origin__header--title"]}>
            Something strange is brewing at
            <br /> CHEMICO...
          </p>
          <div className={styles["origin__capsule"]}>
            <video autoPlay loop muted className={styles["video"]}>
              <source src="/capsule.webm" type="video/webm" />
            </video>
            <div className={styles["origin__description"]}>
              <p className={styles["description__title"]}>
                Goobers is a collection of 15,000 entirely unique and randomized NFTs, provided and
                stored on the Ethereum blockchain. Each Goober sports a number of accessories,
                outfits, animations, and whatever they have claimed for a brain!
              </p>
              <div className={styles["description__badge"]}>
                <span onClick={goToMint} className={styles["badge__title"]}>
                  Mint Goober!
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["origin__body"]}>
          <div className={styles["origin__body--box"]}>
            <p className={styles["body__title"]}>The Origin</p>
            <p className={styles["body__description"]}>
              The multi-trillion-dollar corporation ChemiCo, producer of high-end shampoos for the
              filthy rich, dreamed of making the perfect formula blend for their customers. After
              years of dead-end research and the continuous dump of biowaste into the nearby water
              supply, the discarded waste then began to mutate and form slime-like creatures called
              Goobers.
            </p>
            <div className={styles["show__more"]}>
              <p className={styles["body__description"]}>
                <br />
                <br />
                These simple-minded beings&apos; only goal was to find an item to serve as their
                brain by absorbing the first suitable object they came in contact with. With this
                new-found objective, the Goobers set out into the world to blend into society as
                best they can.
                <br />
                <br />
                After the Goobers escaped their ill-intentioned creators, ChemiCo realized their
                unintended creations were the very key to the component missing in their formula.
                Because, as it turned out, within each Goober was a fraction of the compound needed
                to create the ultimate product.
                <br />
                <br />
                Charged with this new information, ChemiCo dispatched their top recovery teams
                across the world to bring back every last Goober so they could finally attain their
                grand prize.
                <br />
                <br />
                Join us as we follow the crazy, epic stories and adventures of our Goobers as they
                attempt to camouflage themselves against ChemiCo.
              </p>
            </div>
            <div className={styles["goober__origin"]}>
              <Image loading="lazy" src={goober__origin} width={414} height={438} />
            </div>
          </div>
        </div>
        <div className={styles["bottom__effect"]}>
          <Image loading="lazy" src={bottom__origin__effect} width={597} height={885} />
        </div>
      </section>
    </>
  );
};

export default TheOrigin;
