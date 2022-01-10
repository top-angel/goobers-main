import React, { useState } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/features.module.scss";

import CharityDonationImage from "../images/features/CharityDonation.png";
import DiscordIcon from "../images/features/DiscordIcon.png";
import GooberTales from "../images/features/GooberTalesGooberVerse.png";
import GooberVerse from "../images/features/GooberVerse.png";
import LiquidityPool from "../images/features/LiquidityPool.png";
import Locker from "../images/features/Locker.png";
import Merch from "../images/features/Merch.png";
import Wallet from "../images/features/Wallet.png";

const Features = (): JSX.Element => {
  const [featureIndex, setFeatureIndex] = useState(-1);

  const handleFeature = (index) => {
    if (index === featureIndex) {
      setFeatureIndex(-1);
      return;
    }
    setFeatureIndex(index);
  };

  return (
    <>
      <section className={`${styles["features__section"]}`}>
        <div
          className={`${styles["blur__effect"]} ${
            featureIndex >= 0 ? `${styles["blur__effect__toggled"]}` : ""
          }`}
        ></div>
        <div className={styles["header__title"]} style={{ zIndex: 50, position: "relative" }}>
          <p className={styles["header__title--rarity"]}>Features</p>
        </div>
        <div className={styles["features__grid--3cols"]}>
          <div className={styles["feature__col"]}>
            <div
              className={`${styles["feature"]} ${
                featureIndex === 0 ? `${styles["selected__feature"]}` : ""
              }`}
              onClick={() => handleFeature(0)}
            >
              <Image
                src={DiscordIcon}
                width={158}
                height={158}
                className={styles["feature__ilustration"]}
              />
              <div
                className={`${styles["close__modal"]} ${
                  featureIndex === 0 ? `${styles["close__modal--enabled"]}` : ""
                }`}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div
              className={`${styles["feature_modal"]} ${
                featureIndex === 0 ? `${styles["feature_modal--toggled"]}` : ""
              }`}
            >
              <p>
                Join the ultimate Goober hangout spot! We’ll be creating a channel specifically for
                those who HODL their Goobers, giving members exclusive content ahead of all the
                others. Goober holders with access to this VIP channel will experience perks like
                special giveaways, top-secret updates about Goobers, and more!
              </p>
            </div>
          </div>
          <div className={styles["feature__col"]}>
            <div
              className={`${styles["feature"]} ${
                featureIndex === 1 ? `${styles["selected__feature"]}` : ""
              }`}
              onClick={() => handleFeature(1)}
            >
              <Image
                src={CharityDonationImage}
                width={158}
                height={158}
                className={styles["feature__ilustration"]}
              />
              <div
                className={`${styles["close__modal"]} ${
                  featureIndex === 1 ? `${styles["close__modal--enabled"]}` : ""
                }`}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div
              className={`${styles["feature_modal"]} ${
                featureIndex === 1 ? `${styles["feature_modal--toggled"]}` : ""
              }`}
            >
              <p>
                Includes Creative & Commercial right usage for as long as you own the Goober. You’ll
                be given the freedom to do whatever suits your fancy with your own Goobers, whether
                it is creating a stunning Goober of your own or a Goober-Mad Scientist graphic novel
                based off of it.
              </p>
            </div>
          </div>
          <div className={styles["feature__col"]}>
            <div
              className={`${styles["feature"]} ${
                featureIndex === 2 ? `${styles["selected__feature"]}` : ""
              }`}
              onClick={() => handleFeature(2)}
            >
              <Image
                src={LiquidityPool}
                width={158}
                height={158}
                className={styles["feature__ilustration"]}
              />
              <div
                className={`${styles["close__modal"]} ${
                  featureIndex === 2 ? `${styles["close__modal--enabled"]}` : ""
                }`}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div
              className={`${styles["feature_modal"]} ${styles["right__modal"]} ${
                featureIndex === 2 ? `${styles["feature_modal--toggled"]}` : ""
              }`}
            >
              <p>
                Goobers get perks! Down the milestone trek, Goobers will expand to various NFT
                platforms, beginning first with DOPs and NFT20, by establishing liquidity pools.
                This expansion will give Goober members access to loans, staking, and other cool
                perks and features.
              </p>
            </div>
          </div>
          <div className={styles["feature__col"]}>
            <div
              className={`${styles["feature"]} ${
                featureIndex === 3 ? `${styles["selected__feature"]}` : ""
              }`}
              onClick={() => handleFeature(3)}
            >
              <Image
                src={Wallet}
                width={158}
                height={158}
                className={styles["feature__ilustration"]}
              />
              <div
                className={`${styles["close__modal"]} ${
                  featureIndex === 3 ? `${styles["close__modal--enabled"]}` : ""
                }`}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div
              className={`${styles["feature_modal"]} ${
                featureIndex === 3 ? `${styles["feature_modal--toggled"]}` : ""
              }`}
            >
              <p>
                Goobers Give Back! The Goobers team will establish a community wallet for perpetual
                rewards and prizes. Not only will the Goober holders benefit, but the world as
                Goobers campaigns for various charities extend that love to others.
              </p>
            </div>
          </div>
          <div className={styles["feature__col"]}>
            <div
              className={`${styles["feature"]} ${
                featureIndex === 4 ? `${styles["selected__feature"]}` : ""
              }`}
              onClick={() => handleFeature(4)}
            >
              <Image
                src={GooberVerse}
                width={158}
                height={158}
                className={styles["feature__ilustration"]}
              />
              <div
                className={`${styles["close__modal"]} ${
                  featureIndex === 4 ? `${styles["close__modal--enabled"]}` : ""
                }`}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div
              className={`${styles["feature_modal"]} ${
                featureIndex === 4 ? `${styles["feature_modal--toggled"]}` : ""
              }`}
            >
              <p>
                Goobers take over the universe! Gamification will offer a rare opportunity to view
                and play with NFTs before anyone else can. In a world of boxes and pixels, special
                Goober inspired NFTs and exclusive spoilers will be yours to partake in when you
                explore the GooberVerse.
              </p>
            </div>
          </div>
          <div className={styles["feature__col"]}>
            <div
              className={`${styles["feature"]} ${
                featureIndex === 5 ? `${styles["selected__feature"]}` : ""
              }`}
              onClick={() => handleFeature(5)}
            >
              <Image
                src={GooberTales}
                width={158}
                height={158}
                className={styles["feature__ilustration"]}
              />
              <div
                className={`${styles["close__modal"]} ${
                  featureIndex === 5 ? `${styles["close__modal--enabled"]}` : ""
                }`}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div
              className={`${styles["feature_modal"]} ${styles["right__modal"]} ${
                featureIndex === 5 ? `${styles["feature_modal--toggled"]}` : ""
              }`}
            >
              <p>
                These outlandish, multi-episodic tales will contain fantastical Goober lore and give
                you a front-row seat to different perspectives inside the Goober World. Special
                Goober members may even be featured as a Goober in one of the stories, forever
                immortalized in ways crazy and fun.
              </p>
            </div>
          </div>
        </div>
        <div className={styles["features__grid--2cols"]}>
          <div className={styles["feature__col"]}>
            <div
              className={`${styles["feature"]} ${
                featureIndex === 6 ? `${styles["selected__feature"]}` : ""
              }`}
              onClick={() => handleFeature(6)}
            >
              <Image
                src={Merch}
                width={158}
                height={158}
                className={styles["feature__ilustration"]}
              />
              <div
                className={`${styles["close__modal"]} ${
                  featureIndex === 6 ? `${styles["close__modal--enabled"]}` : ""
                }`}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div
              className={`${styles["feature_modal"]} ${
                featureIndex === 6 ? `${styles["feature_modal--toggled"]}` : ""
              }`}
            >
              <p>
                Get your Goober on, literally! The Goobers merch store will feature exclusive,
                time-limited items. We&apos;ll have a special launch day discount and exclusive
                items for holders as well as Goober lore inspired items when this amazing store
                opens!
              </p>
            </div>
          </div>
          <div className={styles["feature__col"]}>
            <div
              className={`${styles["feature"]} ${
                featureIndex === 7 ? `${styles["selected__feature"]}` : ""
              }`}
              onClick={() => handleFeature(7)}
            >
              <Image
                src={Locker}
                width={158}
                height={158}
                className={styles["feature__ilustration"]}
              />
              <div
                className={`${styles["close__modal"]} ${
                  featureIndex === 7 ? `${styles["close__modal--enabled"]}` : ""
                }`}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div
              className={`${styles["feature_modal"]} ${styles["right__modal"]} ${
                featureIndex === 7 ? `${styles["feature_modal--toggled"]}` : ""
              }`}
            >
              <p>
                Goobers get a new look! We will open the “Goo Locker,” which will allow a Goober
                holder to mix and match every random part of their Goober with features they already
                own. It’s an awesome way to discover all the possible Goober combinations
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
