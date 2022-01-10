import React from "react";
import Image from "next/image";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useAuth from "../hooks/useAuth";
import { useDialog } from "../hooks/useDialog";
import { ConnectorNames } from "../utils/providers";

import styles from "../styles/modal.module.scss";
import metaMaskIcon from "../images/mint/MetaMask.svg";
import walletConnectIcon from "../images/mint/WalletConnect.svg";

const ConnectDialog = (): JSX.Element => {
  const { login } = useAuth();
  const { setDialog } = useDialog();

  return (
    <div className={styles.dialog}>
      <div className={styles["mint__modal--box"]}>
        <div className={styles["mint__modal"]}>
          <div className={styles["modal__layout"]}>
            {/* CLOSE THE MODAL */}
            <button className={styles["close__modal"]} onClick={() => setDialog(null)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className={styles["modal__title"]}>
              <p className={styles["title"]}>Connect your wallet</p>
            </div>
            <div className={styles["wallet__connectors"]}>
              <div
                className={styles["wallet"]}
                onClick={() => {
                  login(ConnectorNames.Injected);
                  localStorage.setItem("connector", ConnectorNames.Injected);
                  setDialog(null);
                }}
              >
                <div className={styles["wallet__icon"]}>
                  <Image src={metaMaskIcon} width={49.56} height={46} />
                </div>
                <p className={styles["wallet__name"]}>Metamask</p>
              </div>
              <div
                className={styles["wallet"]}
                onClick={() => {
                  login(ConnectorNames.WalletConnect);
                  localStorage.setItem("connector", ConnectorNames.WalletConnect);
                  setDialog(null);
                }}
              >
                <div className={styles["wallet__icon"]}>
                  <Image src={walletConnectIcon} width={68.53} height={42} />
                </div>
                <p className={styles["wallet__name"]}>WalletConnect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectDialog;
