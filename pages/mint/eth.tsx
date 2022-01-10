import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";

import {
  useAvailableGoobers,
  useGooberMainSaleActive,
  useGooberPreSaleActive,
} from "../../hooks/sales";
import useAuth from "../../hooks/useAuth";
import { useDialog } from "../../hooks/useDialog";
import { setupNetwork } from "../../utils/network";
import { useGooberPrice } from "../../hooks/usePrice";
import { useGoobersContract } from "../../hooks/contracts";
import MintCountdown from "../../components/MintCountdown";
import { useEthWhitelist } from "../../hooks/useWhiteList";
import ConnectDialog from "../../components/ConnectDialog";
import { ConnectorNames, eth_chainId } from "../../utils/providers";
import { useMaxPurchaseAmount } from "../../hooks/usePurchase";

import styles from "../../styles/mint.module.scss";
import cryptoIcon from "../../images/mint/ETH/ETH.svg";
import gooberImage from "../../images/mint/ETH/Goober.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { BigNumber } from "@ethersproject/bignumber";
import { Web3Provider } from "@ethersproject/providers";

const MintETH: NextPage = () => {
  const contract = useGoobersContract();
  const { account, chainId, library } = useWeb3React<Web3Provider>();

  const { login } = useAuth();
  const { setDialog } = useDialog();

  const [amount, setAmount] = useState(1);

  const price = useGooberPrice();

  const presaleActive = useGooberPreSaleActive();
  const mainsaleActive = useGooberMainSaleActive();

  const maxSaleAmount = useMaxPurchaseAmount();
  // const maxWhiteSaleAmount = useMaxWhitePurchaseAmount();

  const whitelisted = useEthWhitelist();
  const available = useAvailableGoobers();

  // const active = useMemo(() => presaleActive || mainsaleActive, [presaleActive, mainsaleActive]);
  const active = true;

  useEffect(() => {
    if (account && chainId != eth_chainId) {
      setupNetwork(eth_chainId);
    }
  }, [account, chainId]);

  const [ethBal, setEthBal] = useState<BigNumber>(BigNumber.from(0));

  useEffect(() => {
    if (!library || !account) return;

    library.getBalance(account).then((bal) => {
      if (bal) {
        setEthBal(bal);
      }
    });
  }, [library, account]);

  const onSubmit = useCallback(() => {
    if (!account) {
      const connector = localStorage.getItem("connector");
      if (connector) {
        login(connector as ConnectorNames);
      } else {
        setDialog(<ConnectDialog />);
      }
    } else {
      if (!contract) return;
      if (!price?.mul(amount).gt(ethBal)) {
        contract.purchase(amount, { value: price.mul(amount).toString() });
      }
    }
  }, [contract, account, price, amount, login, setDialog, ethBal]);

  return (
    <>
      <section className={styles.mint__eth}>
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
                Mint your <br />
                Goobers
              </h1>
              <p className={styles["mint__date"]}>September 17th, 3PM EST</p>
            </div>
            <div className={styles["mint__body"]}>
              <MintCountdown to={new Date(2021, 8, 17, 16)} />
              <div className={styles["mint__actions"]}>
                <button
                  className={styles["mint__btn"]}
                  onClick={onSubmit}
                  disabled={account && (!active || (presaleActive && !whitelisted?.gt(0)))}
                >
                  <span>
                    {(() => {
                      if (!account) {
                        return "Connect";
                      } else {
                        if (active) {
                          if (presaleActive && !whitelisted?.gt(0)) {
                            return "Not Eligible";
                          } else {
                            if (price?.mul(amount).gt(ethBal)) {
                              return "No enough ETH";
                            }
                            return "Mint";
                          }
                        } else {
                          return "Sale Closed";
                        }
                      }
                    })()}
                  </span>
                </button>

                {account && !(!active || (presaleActive && !whitelisted?.gt(0))) && (
                  <select
                    value={amount}
                    className={styles["mint__amount__goobers"]}
                    onChange={(e) => setAmount(+e.target.value)}
                  >
                    {presaleActive &&
                      new Array(whitelisted?.toNumber()).fill(0).map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    {mainsaleActive &&
                      new Array(maxSaleAmount?.toNumber()).fill(0).map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                  </select>
                )}
              </div>
              <div className={styles["mint__informations"]}>
                <p className={styles["mint__amount--crypto"]}>
                  {price && <>{ethers.utils.formatEther(price)} ETH</>}
                </p>
                {available != null && (
                  <p className={styles["mint__gooober--left"]}>
                    {available.toLocaleString()} <span>left</span>
                  </p>
                )}
                <p className={styles["mint__gooober--max"]}>
                  {presaleActive
                    ? "max 4 per address"
                    : mainsaleActive
                    ? maxSaleAmount && `max ${maxSaleAmount}`
                    : null}
                </p>
              </div>
            </div>
          </div>

          <div className={styles["mint__right--side"]}>
            <div className={styles["mint__icon--goober"]}>
              <Image src={gooberImage} />
            </div>
            <div className={styles["mint__icon--crypto"]}>
              <Image src={cryptoIcon} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MintETH;
