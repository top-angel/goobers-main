import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/faq.module.scss";

const Faq = (): JSX.Element => {
  const [dropdownIndex, setDropdownIndex] = useState(-1);

  const handleDropdown = (index) => {
    if (index === dropdownIndex) {
      setDropdownIndex(-1);
      return;
    }
    setDropdownIndex(index);
  };

  return (
    <>
      <section className={styles["faq__section"]}>
        <div className={styles["faq__container"]}>
          <div className={styles["header__title"]}>
            <p className={styles["header__title--rarity"]}>FAQ</p>
          </div>

          <div className={styles["faq__dropdown"]}>
            <div
              className={styles["faq__dropdown--toggler"]}
              onClick={() => {
                handleDropdown(1);
              }}
            >
              <p>
                When do Goobers launch?{" "}
                {dropdownIndex === 1 ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </p>
            </div>
            <div
              className={`${styles["faq__dropdown--content"]} ${
                dropdownIndex === 1 ? `${styles["dropdown__toggled"]}` : ""
              }`}
            >
              <p>Thursday, September 16, 2021</p>
            </div>
          </div>
          <div className={styles["faq__dropdown"]}>
            <div
              className={styles["faq__dropdown--toggler"]}
              onClick={() => {
                handleDropdown(2);
              }}
            >
              <p>
                Where will Goobers be available to purchase?{" "}
                {dropdownIndex === 2 ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </p>
            </div>
            <div
              className={`${styles["faq__dropdown--content"]} ${
                dropdownIndex === 2 ? `${styles["dropdown__toggled"]}` : ""
              }`}
            >
              <p>
                <a href="https://goobers.net/">https://goobers.net/</a> (the official Goobers
                website).
              </p>
            </div>
          </div>
          <div className={styles["faq__dropdown"]}>
            <div
              className={styles["faq__dropdown--toggler"]}
              onClick={() => {
                handleDropdown(3);
              }}
            >
              <p>
                On which network do Goobers reside?{" "}
                {dropdownIndex === 3 ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </p>
            </div>
            <div
              className={`${styles["faq__dropdown--content"]} ${
                dropdownIndex === 3 ? `${styles["dropdown__toggled"]}` : ""
              }`}
            >
              <p>
                All Goobers are stored on the Ethereum blockchain. Ethereum was chosen because
                it&apos;s the largest blockchain for NFTs, partnering with by-far the largest and
                most active secondary market (OpenSea).
              </p>
            </div>
          </div>
          <div className={styles["faq__dropdown"]}>
            <div
              className={styles["faq__dropdown--toggler"]}
              onClick={() => {
                handleDropdown(4);
              }}
            >
              <p>
                How many Goobers will be available?{" "}
                {dropdownIndex === 4 ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </p>
            </div>
            <div
              className={`${styles["faq__dropdown--content"]} ${
                dropdownIndex === 4 ? `${styles["dropdown__toggled"]}` : ""
              }`}
            >
              <p>15,000</p>
            </div>
          </div>
          <div className={styles["faq__dropdown"]}>
            <div
              className={styles["faq__dropdown--toggler"]}
              onClick={() => {
                handleDropdown(5);
              }}
            >
              <p>
                How many different Goober traits are there?{" "}
                {dropdownIndex === 5 ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </p>
            </div>
            <div
              className={`${styles["faq__dropdown--content"]} ${
                dropdownIndex === 5 ? `${styles["dropdown__toggled"]}` : ""
              }`}
            >
              <p>
                There are 31 colors, 53 hats, 42 brains, 53 outfits, 44 accessories, 27 backgrounds,
                and 9 animated effects, meaning over 39 BILLION possible combinations!
              </p>
            </div>
          </div>
          <div className={styles["faq__dropdown"]}>
            <div
              className={styles["faq__dropdown--toggler"]}
              onClick={() => {
                handleDropdown(6);
              }}
            >
              <p>
                I have multiple accounts, can I get on the whitelist with each one?{" "}
                {dropdownIndex === 6 ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </p>
            </div>
            <div
              className={`${styles["faq__dropdown--content"]} ${
                dropdownIndex === 6 ? `${styles["dropdown__toggled"]}` : ""
              }`}
            >
              <p>
                No. We only support a single account per user. Claiming multiple whitelist spots or
                airdrops is not allowed, and won&apos;t be accommodated by staff.
              </p>
            </div>
          </div>
          <div className={styles["faq__dropdown"]}>
            <div
              className={styles["faq__dropdown--toggler"]}
              onClick={() => {
                handleDropdown(7);
              }}
            >
              <p>
                When can I purchase Goobers?{" "}
                {dropdownIndex === 7 ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </p>
            </div>
            <div
              className={`${styles["faq__dropdown--content"]} ${
                dropdownIndex === 7 ? `${styles["dropdown__toggled"]}` : ""
              }`}
            >
              <p>
                • CLU Presale: Thurs. Sept. 16 from 12:00 pm to 3:00 pm EST (only for those on the
                CLU whitelist).
                <br />• CLU Main Sale: starts Thurs. Sept. 16 at 3:00 pm EST.
                <br />• ETH Presale: Fri. Sept. 17 from 12:00 pm to 3:00 pm EST (only for those on
                the ETH whitelist).
                <br />• ETH Main Sale: starts Fri. Sept. 17 at 3:00 pm EST.
              </p>
            </div>
          </div>
          <div className={styles["faq__dropdown"]}>
            <div
              className={styles["faq__dropdown--toggler"]}
              onClick={() => {
                handleDropdown(8);
              }}
            >
              <p>
                Will there be a delay between when sales start and when my Goober is revealed?{" "}
                {dropdownIndex === 8 ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </p>
            </div>
            <div
              className={`${styles["faq__dropdown--content"]} ${
                dropdownIndex === 8 ? `${styles["dropdown__toggled"]}` : ""
              }`}
            >
              <p>Yes, though the date of the reveal has yet to be announced.</p>
            </div>
          </div>
          <div className={styles["faq__dropdown"]}>
            <div
              className={styles["faq__dropdown--toggler"]}
              onClick={() => {
                handleDropdown(9);
              }}
            >
              <p>
                How can I claim my Goobers purchased with CLU or given via the airdrop?{" "}
                {dropdownIndex === 9 ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </p>
            </div>
            <div
              className={`${styles["faq__dropdown--content"]} ${
                dropdownIndex === 9 ? `${styles["dropdown__toggled"]}` : ""
              }`}
            >
              <p>
                Goobers purchased with CLU will be available to claim starting Fri. Sept. 17 at 9:00
                pm EST. They will be reserved for you forever until claimed at the ETH address you
                specify during purchase (so you can claim them when ETH gas fees are low).
              </p>
            </div>
          </div>
          <div className={styles["faq__dropdown"]}>
            <div
              className={styles["faq__dropdown--toggler"]}
              onClick={() => {
                handleDropdown(10);
              }}
            >
              <p>
                How will I know I&apos;m buying real Goobers and not fakes?{" "}
                {dropdownIndex === 10 ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </p>
            </div>
            <div
              className={`${styles["faq__dropdown--content"]} ${
                dropdownIndex === 10 ? `${styles["dropdown__toggled"]}` : ""
              }`}
            >
              <p>
                Official Goobers will be available through{" "}
                <a href="https://goobers.net/">https://goobers.net/</a> until the run of 15,000 is
                sold out.
                <br />
                For the secondary market, we will be providing the contract address which you can
                compare against what is being sold. We will also be verifying the collection with
                OpenSea ASAP, so you can easily browse all official Goobers in the collection.
              </p>
            </div>
          </div>

          <a
            href="https://discord.gg/goobers"
            target="_blank"
            rel="noreferrer"
            className={styles["readfull__btn"]}
          >
            <p>READ FULL FAQ</p>
          </a>
        </div>
      </section>
    </>
  );
};

export default Faq;
