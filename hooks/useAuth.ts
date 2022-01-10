// import { NoBscProviderError } from "@binance-chain/bsc-connector";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import { useCallback } from "react";
import { chains, setupNetwork } from "../utils/network";
import { ConnectorNames, connectorsByName, eth_chainId } from "../utils/providers";

const useAuth = (): {
  login: (connectorID: ConnectorNames, chainId?: keyof typeof chains) => void;
  logout: () => void;
} => {
  const { activate, deactivate } = useWeb3React();

  const login = useCallback(
    (connectorID: ConnectorNames, chainId: keyof typeof chains = eth_chainId) => {
      const connector = connectorsByName[connectorID];
      if (connector) {
        const onError = async (error: Error) => {
          console.error(error);
          if (error instanceof UnsupportedChainIdError) {
            setupNetwork(chainId).then(() => activate(connector as AbstractConnector));
          } else {
            localStorage.removeItem("connector");
            if (error instanceof NoEthereumProviderError) {
              // pass
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                connector.walletConnectProvider = null;
              }
              // pass
            } else {
              // pass
            }
          }
        };
        activate(connector as AbstractConnector, onError);
      }
    },
    [activate]
  );

  const logout = useCallback(() => {
    deactivate();
    if (window.localStorage.getItem("walletconnect")) {
      (connectorsByName.WalletConnect as WalletConnectConnector).close();
      (connectorsByName.WalletConnect as WalletConnectConnector).walletConnectProvider = null;
    }
    window.localStorage.removeItem("connector");
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
