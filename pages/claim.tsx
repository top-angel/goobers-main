import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import { useWeb3React } from "@web3-react/core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { setupNetwork } from "../utils/network";
import { ConnectorNames, eth_chainId } from "../utils/providers";
import MintCountdown from "../components/MintCountdown";

import styles from "../styles/mint.module.scss";
import gooberImage from "../images/mint/Claim/Goober.png";
import { useGoobersContract } from "../hooks/contracts";
import useInterval from "../hooks/useInterval";
import { BigNumber } from "@ethersproject/bignumber";
import ConnectDialog from "../components/ConnectDialog";
import useAuth from "../hooks/useAuth";
import { useDialog } from "../hooks/useDialog";
import { useAvailableClaims } from "../hooks/claims";

const ClaimGoobers: NextPage = () => {
  const contract = useGoobersContract();
  const { account, chainId } = useWeb3React();

  const claims = useAvailableClaims();
  const [claimTime, setClaimTime] = useState<BigNumber>();
  const [claimStarted, setClaimStarted] = useState(true);

  const { login } = useAuth();
  const { setDialog } = useDialog();

  useEffect(() => {
    if (account && chainId != eth_chainId) {
      setupNetwork(eth_chainId);
    }
  }, [account, chainId]);

  useEffect(() => {
    if (!contract) return;

    contract.redeemReservedStart().then((start) => {
      const now = Math.floor(Date.now() / 1000);

      setClaimTime(start);
      setClaimStarted(start.lt(now));
    });
  }, [contract]);

  useInterval(() => {
    if (!claimTime) return;
    const now = Math.floor(Date.now() / 1000);

    setClaimStarted(claimTime.lt(now));
  }, 1000);

  return (
    <>
      <section className={styles.mint__claim}>
        <div className={styles["mint__container--grid"]}>
          <div className={styles["mint__left--side"]}>
            <Link href="/" passHref>
              <a className={`${styles["home__btn"]}`}>
                <p>
                  <FontAwesomeIcon icon={faArrowLeft} className={styles["icon"]} /> Back to home
                </p>
              </a>
            </Link>
            <div className={styles["mint__header"]}>
              <h1 className={styles["mint__title"]}>
                Claim your <br />
                Goobers
              </h1>
            </div>
            <div className={styles["mint__body"]}>
              <MintCountdown to={new Date(2021, 8, 18, 1)} />
              {claimStarted && (
                <div className={styles["mint__actions"]}>
                  <button
                    className={styles["mint__btn"]}
                    disabled={account && !claims?.gt(0)}
                    onClick={() => {
                      if (!account) {
                        const connector = localStorage.getItem("connector");
                        if (connector) {
                          login(connector as ConnectorNames);
                        } else {
                          setDialog(<ConnectDialog />);
                        }
                      } else {
                        contract.claim();
                      }
                    }}
                  >
                    <span>{account ? (claims?.gt(0) ? "Claim" : "Not Eligible") : "Connect"}</span>
                  </button>
                </div>
              )}
              {claims && (
                <div className={styles["mint__informations"]}>
                  <p className={styles["mint__gooober--left"]}>
                    {claims.toNumber().toLocaleString()} <span>Goobers</span>
                  </p>
                </div>
              )}
              {account && (
                <div className={styles["wallet__id"]}>
                  <p>
                    Wallet: <span>{account}</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className={styles["mint__right--side"]}>
            <div className={styles["mint__icon--goober"]}>
              <Image src={gooberImage} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClaimGoobers;
