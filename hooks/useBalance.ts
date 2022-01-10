import { useEffect, useMemo, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { BigNumber } from "@ethersproject/bignumber";

import { useCLUooberContract, useGoobersContract } from "./contracts";
import { Provider } from "@ethersproject/abstract-provider";

export const useGoobersBalance = (): BigNumber => {
  const { account } = useWeb3React();
  const contract = useGoobersContract();
  const [balance, setBalance] = useState<BigNumber>();

  useEffect(() => {
    if (!contract || !account) return;

    contract.balanceOf(account).then(setBalance);
  }, [contract, account]);

  useEffect(() => {
    if (!contract || !account) return;

    const listener = () => {
      contract.balanceOf(account).then(setBalance);
    };

    contract.on("Transfer", listener);
    return () => {
      contract.off("Transfer", listener);
    };
  }, [contract, account]);

  return useMemo(() => balance, [balance]);
};

export const useCLUoobersBalance = (provider?: Provider): BigNumber => {
  const { account } = useWeb3React();
  const contract = useCLUooberContract(provider);
  const [balance, setBalance] = useState<BigNumber>();

  useEffect(() => {
    if (!contract || !account) return;

    contract.balanceOf(account).then(setBalance);
  }, [contract, account]);

  useEffect(() => {
    if (!contract || !account) return;

    const listener = (_, addr) => {
      if (addr == account) {
        contract.balanceOf(account).then(setBalance);
      }
    };

    contract.on("Reserve", listener);
    return () => {
      contract.off("Reserve", listener);
    };
  }, [contract, account]);

  return useMemo(() => balance, [balance]);
};
