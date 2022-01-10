import { useEffect, useMemo, useState } from "react";
import { BigNumber } from "@ethersproject/bignumber";

import { BIG_NINE, BIG_TEN } from "../utils/bigNumber";
import { useCLUooberContract, useGoobersContract } from "./contracts";

//////////////////////////// Goobers /////////////////////////////
export const useGooberPrice = (): BigNumber => {
  const contract = useGoobersContract();
  const [price, setPrice] = useState();

  useEffect(() => {
    if (!contract) return;

    contract.gooberPrice().then((p) => setPrice(p));
  }, [contract]);

  return useMemo(() => price, [price]);
};

//////////////////////////// CLUoobers //////////////////////////////
export const useCLUooberPresalePrice = (): BigNumber => {
  const contract = useCLUooberContract();
  const [price, setPrice] = useState();

  useEffect(() => {
    if (!contract) return;

    contract.whitePrice().then((p) => setPrice(p.mul(BIG_TEN.pow(BIG_NINE))));
  }, [contract]);

  useEffect(() => {
    if (!contract) return;

    const listener = (price) => {
      setPrice(price.mul(BIG_TEN.pow(BIG_NINE)));
    };

    contract.on(contract.filters.WhiteSalePriceChange(), listener);
    return () => {
      contract.off(contract.filters.WhiteSalePriceChange(), listener);
    };
  }, [contract]);

  return useMemo(() => price, [price]);
};

export const useCLUooberPrice = (): BigNumber => {
  const contract = useCLUooberContract();
  const [price, setPrice] = useState();

  useEffect(() => {
    if (!contract) return;

    contract
      .nftPrice()
      .then((p: BigNumber) => p.mul(BIG_TEN.pow(BIG_NINE)))
      .then((p) => setPrice(p));
  }, [contract]);

  useEffect(() => {
    if (!contract) return;

    const listener = (price) => {
      setPrice(price.mul(BIG_TEN.pow(BIG_NINE)));
    };

    contract.on(contract.filters.MainSalePriceChange(), listener);
    return () => {
      contract.off(contract.filters.MainSalePriceChange(), listener);
    };
  }, [contract]);

  return useMemo(() => price, [price]);
};
