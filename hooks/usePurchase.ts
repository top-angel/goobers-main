import { BigNumber } from "@ethersproject/bignumber";
import { useEffect, useMemo, useState } from "react";
import { useGoobersContract } from "./contracts";

export const useMaxPurchaseAmount = (): BigNumber => {
  const contract = useGoobersContract();
  const [amount, setAmount] = useState();

  useEffect(() => {
    if (!contract) return;

    contract.maxPurchaseAmt().then((amount) => setAmount(amount));
  }, [contract]);

  return useMemo(() => amount, [amount]);
};

// export const useMaxWhitePurchaseAmount = (): BigNumber => {
//   const contract = useGoobersContract();
//   const [amount, setAmount] = useState();

//   useEffect(() => {
//     if (!contract) return;

// //     contract.maxWhitePurchaseAmt().then((amount) => setAmount(amount));
//   }, [contract]);

//   return useMemo(() => amount, [amount]);
// };
