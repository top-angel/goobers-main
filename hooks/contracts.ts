import { Provider } from "@ethersproject/abstract-provider";
import { WebSocketProvider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useMemo } from "react";
import urls from "../config/constants/urls";
import { getCLUContract, getCLUoobersContract, getGoobersContract } from "../utils/contracts";

const useWebsocketProvider = (url) => {
  return useMemo(() => new WebSocketProvider(url), [url]);
};

export const useCLUContract = (): ethers.Contract => {
  const { library, account } = useWeb3React();

  return useMemo(() => getCLUContract(library, account), [library, account]);
};

export const useCLUooberContract = (provider?: Provider): ethers.Contract => {
  const { library, account } = useWeb3React();
  const websocketprovider = useWebsocketProvider(urls[process.env.CHAIN].BSC);

  return useMemo(
    () => getCLUoobersContract(provider ?? library ?? websocketprovider, account),
    [provider, library, account, websocketprovider]
  );
};

export const useGoobersContract = (provider?: Provider): ethers.Contract => {
  const { library, account } = useWeb3React();
  const websocketprovider = useWebsocketProvider(urls[process.env.CHAIN].ETH);

  return useMemo(
    () => getGoobersContract(provider ?? library ?? websocketprovider, account),
    [provider, library, account, websocketprovider]
  );
};
