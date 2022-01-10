import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import traits from "../config/constants/traits";
import { useAvailableGoobers } from "../hooks/sales";
import { GooberRarity } from "../types";
import Image from "next/image";

import styles from "../styles/goober_rarity.module.scss";

// IMAGES FOR EFFECTS
import BackgroundEffectImage from "../images/rarityarrows.svg";

function Clip({ url }) {
  const previousUrl = useRef(url);
  const videoRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    if (previousUrl.current !== url && videoRef.current) {
      previousUrl.current = url;
      videoRef?.current.load();
    }
  }, [url]);

  return (
    <video ref={videoRef} autoPlay loop muted>
      <source src={url} type="video/mp4" />
    </video>
  );
}

const GooberRaritySection = (): JSX.Element => {
  const goobersAvailable = useAvailableGoobers();
  const [dropdownIndex, setDropdownIndex] = useState(-1);
  const [rarity, setRarity] = useState<GooberRarity>(GooberRarity.COMMON);

  const handleDropdown = (index) => {
    if (index === dropdownIndex) {
      setDropdownIndex(-1);
      return;
    }
    setDropdownIndex(index);
  };

  return (
    <>
      <section
        className={`${styles.goober__rarity} ${rarity == GooberRarity.RARE ? styles["rare"] : ""} ${
          rarity == GooberRarity.UBER_RARE ? styles["uber-rare"] : ""
        } ${rarity == GooberRarity.SUPER_UBER_RARE ? styles["super-uber-rare"] : ""}`}
      >
        <div className={styles["background__effects"]}>
          <div className={`${styles["effect"]}`}>
            <Image
              layout="fill"
              src={BackgroundEffectImage}
              className={`${styles["background__effect"]}`}
            />
          </div>
        </div>

        <div className={styles["container__grid"]}>
          <div className={styles["rarity__header"]}>
            <div className={styles["header__title"]}>
              <p className={styles["header__title--rarity"]}>Goober Rarity</p>
            </div>
            <div className={styles["goobers__left"]}>
              <p className={styles["goobers__left--title"]}>
                {(goobersAvailable?.toNumber() || 15000).toLocaleString()} of 15.000
              </p>
              <p className={styles["goobers__left--subtitle"]}>Goobers left</p>
            </div>
          </div>

          <div className={styles["rarity__body--grid"]}>
            <div className={styles["attributes__column"]}>
              <div className={styles["body__goober--randomizer"]}>
                <div className={styles["goober__ilustration"]}>
                  {rarity == GooberRarity.COMMON ? (
                    <Clip url={"/common.mp4"} />
                  ) : rarity == GooberRarity.RARE ? (
                    <Clip url={"/rare.mp4"} />
                  ) : rarity == GooberRarity.UBER_RARE ? (
                    <Clip url={"/uber_rare.mp4"} />
                  ) : rarity == GooberRarity.SUPER_UBER_RARE ? (
                    <Clip url={"/super_uber_rare.mp4"} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className={styles["body__goober--attributes"]}>
                {rarity != GooberRarity.SUPER_UBER_RARE ? (
                  <>
                    <div className={styles["dropdown__attributes"]}>
                      <div
                        className={styles["dropdown__attributes--toggler"]}
                        onClick={() => handleDropdown(0)}
                      >
                        <p className={styles["dropdown__title"]}>
                          Hats <FontAwesomeIcon icon={faAngleDown} />
                        </p>
                      </div>
                      <ul
                        className={`${styles["dropdown"]} ${
                          dropdownIndex === 0 ? `${styles["dropdown__toggled"]}` : ""
                        }`}
                      >
                        {traits[rarity].hats.map((item, i) => (
                          <li key={i}>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles["dropdown__attributes"]}>
                      <div
                        className={styles["dropdown__attributes--toggler"]}
                        onClick={() => handleDropdown(1)}
                      >
                        <p className={styles["dropdown__title"]}>
                          Brains <FontAwesomeIcon icon={faAngleDown} />
                        </p>
                      </div>
                      <ul
                        className={`${styles["dropdown"]} ${
                          dropdownIndex === 1 ? `${styles["dropdown__toggled"]}` : ""
                        }`}
                      >
                        {traits[rarity].brains.map((item, i) => (
                          <li key={i}>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles["dropdown__attributes"]}>
                      <div
                        className={styles["dropdown__attributes--toggler"]}
                        onClick={() => handleDropdown(2)}
                      >
                        <p className={styles["dropdown__title"]}>
                          Accessories <FontAwesomeIcon icon={faAngleDown} />
                        </p>
                      </div>
                      <ul
                        className={`${styles["dropdown"]} ${
                          dropdownIndex === 2 ? `${styles["dropdown__toggled"]}` : ""
                        }`}
                      >
                        {traits[rarity].accessories.map((item, i) => (
                          <li key={i}>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles["dropdown__attributes"]}>
                      <div
                        className={styles["dropdown__attributes--toggler"]}
                        onClick={() => handleDropdown(3)}
                      >
                        <p className={styles["dropdown__title"]}>
                          Effects <FontAwesomeIcon icon={faAngleDown} />
                        </p>
                      </div>
                      <ul
                        className={`${styles["dropdown"]} ${
                          dropdownIndex === 3 ? `${styles["dropdown__toggled"]}` : ""
                        }`}
                      >
                        {traits[rarity].effects.map((item, i) => (
                          <li key={i}>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles["dropdown__attributes"]}>
                      <div
                        className={styles["dropdown__attributes--toggler"]}
                        onClick={() => handleDropdown(4)}
                      >
                        <p className={styles["dropdown__title"]}>
                          Outfits <FontAwesomeIcon icon={faAngleDown} />
                        </p>
                      </div>
                      <ul
                        className={`${styles["dropdown"]} ${
                          dropdownIndex === 4 ? `${styles["dropdown__toggled"]}` : ""
                        }`}
                      >
                        {traits[rarity].outfits.map((item, i) => (
                          <li key={i}>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles["dropdown__attributes"]}>
                      <div
                        className={styles["dropdown__attributes--toggler"]}
                        onClick={() => handleDropdown(5)}
                      >
                        <p className={styles["dropdown__title"]}>
                          Colors <FontAwesomeIcon icon={faAngleDown} />
                        </p>
                      </div>
                      <ul
                        className={`${styles["dropdown"]} ${
                          dropdownIndex === 5 ? `${styles["dropdown__toggled"]}` : ""
                        }`}
                      >
                        {traits[rarity].colors.map((item, i) => (
                          <li key={i}>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles["dropdown__attributes"]}>
                      <div
                        className={styles["dropdown__attributes--toggler"]}
                        onClick={() => handleDropdown(6)}
                      >
                        <p className={styles["dropdown__title"]}>
                          Backgrounds <FontAwesomeIcon icon={faAngleDown} />
                        </p>
                      </div>
                      <ul
                        className={`${styles["dropdown"]} ${
                          dropdownIndex === 6 ? `${styles["dropdown__toggled"]}` : ""
                        }`}
                      >
                        {traits[rarity].backgrounds.map((item, i) => (
                          <li key={i}>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles["dropdown__attributes"]}>
                      <div
                        className={styles["dropdown__attributes--toggler"]}
                        onClick={() => handleDropdown(0)}
                      >
                        <p className={styles["dropdown__title"]}>Alien Invader</p>
                      </div>
                    </div>
                    <div className={styles["dropdown__attributes"]}>
                      <div
                        className={styles["dropdown__attributes--toggler"]}
                        onClick={() => handleDropdown(0)}
                      >
                        <p className={styles["dropdown__title"]}>Deep Sea King</p>
                      </div>
                    </div>
                    <div className={styles["dropdown__attributes"]}>
                      <div
                        className={styles["dropdown__attributes--toggler"]}
                        onClick={() => handleDropdown(0)}
                      >
                        <p className={styles["dropdown__title"]}>Robo Goo</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className={styles["body__goober--rarities"]}>
              <button
                className={`${styles["action__btn"]} ${styles["common__btn"]}`}
                onClick={() => setRarity(GooberRarity.COMMON)}
              >
                <p>Common</p>
              </button>
              <button
                className={`${styles["action__btn"]} ${styles["rare__btn"]}`}
                onClick={() => setRarity(GooberRarity.RARE)}
              >
                <p>Rare</p>
              </button>
              <button
                className={`${styles["action__btn"]} ${styles["uber__rare__btn"]}`}
                onClick={() => setRarity(GooberRarity.UBER_RARE)}
              >
                <p>Uber Rare</p>
              </button>
              <button
                className={`${styles["action__btn"]} ${styles["super__uber__rare__btn"]}`}
                onClick={() => setRarity(GooberRarity.SUPER_UBER_RARE)}
              >
                <p>Super Uber Rare</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GooberRaritySection;
