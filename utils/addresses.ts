import contracts from "../config/constants/contracts";

export const getAddress = (address: unknown): string => {
  const chain = process.env.CHAIN;
  return address[chain] ? address[chain] : address["MAINNET"];
};

export const getCLUAddress = (): string => {
  return getAddress(contracts.clucoin);
};

export const getCLUoobersAddress = (): string => {
  return getAddress(contracts.cluoobers);
};

export const getGoobersAddress = (): string => {
  return getAddress(contracts.goobers);
};
