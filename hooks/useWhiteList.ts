import { useEffect, useMemo, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useCLUooberContract, useGoobersContract } from "./contracts";
import { AddressZero } from "@ethersproject/constants";
import { BigNumber } from "@ethersproject/bignumber";

export const useOnCLUWhitelist = (): boolean => {
  const { account } = useWeb3React();
  const contract = useCLUooberContract();
  const [onWhitelist, setOnWhitelist] = useState(false);

  useEffect(() => {
    if (!contract || !account) return;

    contract.onWhitelist(account).then(setOnWhitelist);
  }, [contract, account]);

  useEffect(() => {
    if (!contract || !account) return;

    const listener = (_, addr) => {
      if (addr == account) {
        contract.onWhitelist(account).then(setOnWhitelist);
      }
    };
    contract.on("Reserve", listener);
    return () => {
      contract.off("Reserve", listener);
    };
  }, [contract, account]);

  return useMemo(() => onWhitelist, [onWhitelist]);
};

export const useEthWhitelist = (): BigNumber => {
  const { account } = useWeb3React();
  const contract = useGoobersContract();
  const [whitelist, setWhitelist] = useState();

  useEffect(() => {
    if (!contract || !account) return;

    contract.whitelistBalance(account).then(setWhitelist);
  }, [contract, account]);

  useEffect(() => {
    if (!contract || !account) return;

    const listener = (owner, to) => {
      if (owner == AddressZero && to == account) {
        contract.whitelistBalance(account).then(setWhitelist);
      }
    };

    contract.on("Transfer", listener);
    return () => {
      contract.off("Transfer", listener);
    };
  }, [contract, account]);

  return useMemo(() => whitelist, [whitelist]);
};
