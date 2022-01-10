import { useCallback, useEffect, useMemo, useState } from "react";
import { BigNumber } from "@ethersproject/bignumber";
import { useCLUooberContract, useGoobersContract } from "./contracts";

/////////////////////// CLUoobers //////////////////////////
export const useCLUooberSaleActive = (): boolean => {
  const contract = useCLUooberContract();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!contract) return;

    contract.saleIsActive().then((active) => setActive(active));
  }, [contract]);

  return useMemo(() => active, [active]);
};

export const useCLUooberMainSaleActive = (): boolean => {
  const contract = useCLUooberContract();
  const saleActive = useCLUooberSaleActive();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!contract || !saleActive) return;

    Promise.all<BigNumber, BigNumber>([
      contract.whiteSaleStart(),
      contract.whiteSaleDuration(),
    ]).then(([start, duration]) => {
      const now = Math.floor(Date.now() / 1000);
      setActive(start.toNumber() + duration.toNumber() < now && saleActive);
    });
  }, [contract, saleActive]);

  return useMemo(() => active, [active]);
};

export const useCLUooberPreSaleActive = (): boolean => {
  const contract = useCLUooberContract();
  const saleActive = useCLUooberSaleActive();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!contract || !saleActive) return;

    Promise.all<BigNumber, BigNumber>([
      contract.whiteSaleStart(),
      contract.whiteSaleDuration(),
    ]).then(([start, duration]) => {
      const now = Math.floor(Date.now() / 1000);
      setActive(
        start.toNumber() < now && now < start.toNumber() + duration.toNumber() && saleActive
      );
    });
  }, [contract, saleActive]);

  return useMemo(() => active, [active]);
};

export const useAvailableCLUoobers = (): BigNumber => {
  const contract = useCLUooberContract();
  const [remaning, setRemaning] = useState<BigNumber>();

  useEffect(() => {
    if (!contract) return;

    contract.availableNFTs().then((remaning) => {
      setRemaning(remaning);
    });
  }, [contract]);

  useEffect(() => {
    if (!contract) return;

    const listener = () => {
      contract.availableNFTs().then((remaning) => {
        setRemaning(remaning);
      });
    };

    contract.on(contract.filters.Reserve(), listener);
    return () => {
      contract.off(contract.filters.Reserve(), listener);
    };
  }, [contract]);

  return useMemo(() => remaning, [remaning]);
};

//////////////////////// Goobers //////////////////////////
export const useGooberSaleActive = (): boolean => {
  const contract = useGoobersContract();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!contract) return;

    contract.saleIsActive().then((active) => setActive(active));
  }, [contract]);

  return useMemo(() => active, [active]);
};

export const useGooberMainSaleActive = (): boolean => {
  // const contract = useGoobersContract();
  const saleActive = useGooberSaleActive();
  // const [active, setActive] = useState(false);

  // useEffect(() => {
  //   if (!contract || !saleActive) return;

  //   Promise.all<BigNumber, BigNumber>([contract.whiteSaleStart(), contract.whiteSaleEnd()]).then(
  //     ([, end]) => {
  //       const now = Math.floor(Date.now() / 1000);
  //       setActive(end.toNumber() < now && saleActive);
  //     }
  //   );
  // }, [contract, saleActive]);

  return useMemo(() => saleActive, [saleActive]);
};

export const useGooberPreSaleActive = (): boolean => {
  const contract = useGoobersContract();
  const saleActive = useGooberSaleActive();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!contract || !saleActive) return;

    Promise.all<BigNumber, BigNumber>([contract.whiteSaleStart(), contract.whiteSaleEnd()]).then(
      ([start, end]) => {
        const now = Math.floor(Date.now() / 1000);
        setActive(start.toNumber() < now && now < end.toNumber() && saleActive);
      }
    );
  }, [contract, saleActive]);

  return useMemo(() => active, [active]);
};

export const useAvailableGoobers = (): BigNumber | null => {
  const contract = useGoobersContract();
  const [remaning, setRemaning] = useState<BigNumber>();

  const fetchRemainingGoos = useCallback(() => {
    Promise.all<BigNumber, BigNumber, BigNumber>([
      contract.totalSupply(),
      contract.reservedCount(),
      contract.maxSupply(),
    ]).then(([bought, reserved, total]) => {
      setRemaning(total.sub(reserved).sub(bought));
    });
  }, [contract]);

  useEffect(() => {
    if (!contract) return;

    fetchRemainingGoos();
  }, [contract, fetchRemainingGoos]);

  useEffect(() => {
    if (!contract) return;

    const listener = () => {
      fetchRemainingGoos();
    };
    contract.on("Transfer", listener);
    return () => {
      contract.off("Transfer", listener);
    };
  }, [contract, fetchRemainingGoos]);

  return useMemo(() => remaning, [remaning]);
};
