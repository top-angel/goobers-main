import React from "react";
import Image from "next/image";

import dnp3 from "../images/team/DNP3Goober.jpg";
import dog from "../images/team/DogGoober.jpg";
import pogo from "../images/team/PogoGoober.jpg";
import sneaky from "../images/team/SneakyGoober.jpg";
import Nate from "../images/team/Nate.jpg";
import styles from "../styles/team.module.scss";

const Team = (): JSX.Element => {
  return (
    <>
      <section className={styles.team_box}>
        <div className={styles["container__grid"]}>
          <div className={styles["rarity__header"]}>
            <div className={styles["header__title"]}>
              <p className={styles["header__title--rarity"]}>The Goober Team</p>
            </div>
          </div>

          <div className={styles["team__grid"]}>
            <div className={styles["team__box"]}>
              <div className={styles["header"]}>
                <div className={styles["header__image"]}>
                  <Image src={dnp3} />
                </div>
              </div>
              <div className={styles["description"]}>
                <p className={styles["title"]}>@DNPthree</p>
                <p className={styles["description__text"]}>CEO</p>
              </div>
            </div>
            <div className={styles["team__box"]}>
              <div className={styles["header"]}>
                <div className={styles["header__image"]}>
                  <Image src={dog} />
                </div>
              </div>
              <div className={styles["description"]}>
                <p className={styles["title"]}>@DogGodFrogLog</p>
                <p className={styles["description__text"]}>COO</p>
              </div>
            </div>
            <div className={styles["team__box"]}>
              <div className={styles["header"]}>
                <div className={styles["header__image"]}>
                  <Image src={pogo} />
                </div>
              </div>
              <div className={styles["description"]}>
                <p className={styles["title"]}>@PogoB</p>
                <p className={styles["description__text"]}>CTO</p>
              </div>
            </div>
            <div className={styles["team__box"]}>
              <div className={styles["header"]}>
                <div className={styles["header__image"]}>
                  <Image src={sneaky} />
                </div>
              </div>
              <div className={styles["description"]}>
                <p className={styles["title"]}>@SneakyBroArt</p>
                <p className={styles["description__text"]}>Artist</p>
              </div>
            </div>
            <div className={styles["team__box"]}>
              <div className={styles["header"]}>
                <div className={styles["header__image"]}>
                  <Image src={Nate} />
                </div>
              </div>
              <div className={styles["description"]}>
                <p className={styles["title"]}>@Riftbaby</p>
                <p className={styles["description__text"]}>Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
