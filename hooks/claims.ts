import { BigNumber } from "@ethersproject/bignumber";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useMemo, useState } from "react";
import { useGoobersContract } from "./contracts";

export const useAvailableClaims = (): BigNumber => {
  const { account } = useWeb3React();
  const contract = useGoobersContract();
  const [claims, setClaims] = useState();

  useEffect(() => {
    if (!contract || !account) return;

    contract.availableClaims(account).then(setClaims);
  }, [contract, account]);

  return useMemo(() => claims, [claims]);
};
