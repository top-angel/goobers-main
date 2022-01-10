import { useWeb3React } from "@web3-react/core";
import { BigNumber } from "@ethersproject/bignumber";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useCLUContract, useCLUooberContract } from "./contracts";

export const useCLUAllowance = (): BigNumber => {
  const { account, library } = useWeb3React();

  const contract = useCLUContract();
  const cluooberContract = useCLUooberContract();

  const [allowance, setAllowance] = useState<BigNumber>();

  const fetchAllowance = useCallback(() => {
    if (!contract || !cluooberContract || !account) return;

    contract
      .allowance(account, cluooberContract.address)
      .then((allowance) => setAllowance(allowance));
  }, [contract, cluooberContract, account]);

  useEffect(() => {
    fetchAllowance();
  }, [fetchAllowance]);

  useEffect(() => {
    if (!library) return;

    const listener = () => {
      fetchAllowance();
    };
    library.on("block", listener);

    return () => {
      library.off("block", listener);
    };
  }, [library, fetchAllowance]);

  useEffect(() => {
    if (!contract || !cluooberContract || !account) return;

    const listener = (owner, spender, amount) => {
      if (spender == cluooberContract.address && owner == account) {
        setAllowance((allowance) => allowance?.add(amount));
      }
    };
    contract.on(contract.filters.Approval(), listener);

    return () => {
      contract.off(contract.filters.Approval(), listener);
    };
  }, [contract, cluooberContract, account]);

  return useMemo(() => allowance, [allowance]);
};
