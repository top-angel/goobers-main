import { ethers } from "ethers";
import { isAddress } from "@ethersproject/address";
import { Contract } from "@ethersproject/contracts";
import { AddressZero } from "@ethersproject/constants";
import { JsonRpcProvider, JsonRpcSigner, Web3Provider, Provider } from "@ethersproject/providers";

import { getCLUAddress, getCLUoobersAddress, getGoobersAddress } from "./addresses";

import goobersAbi from "../config/abi/goobers.json";
import clucoinAbi from "../config/abi/clucoin.json";
import cluoobersAbi from "../config/abi/cluoobers.json";
import urls from "../config/constants/urls";

export function getSigner(library: JsonRpcProvider | Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked();
}

export function getProviderOrSigner(
  library: JsonRpcProvider | Web3Provider,
  account?: string
): Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library;
}

export const getContract = (
  abi: ethers.ContractInterface,
  address: string,
  library: JsonRpcProvider | Web3Provider,
  account?: string
): ethers.Contract => {
  if (!isAddress(address) || address == AddressZero) {
    // throw Error(`Invalid 'address' parameter '${address}'.`);
    return null;
  }

  return new Contract(address, abi, getProviderOrSigner(library, account));
};

export const getLibrary = (url: string, library?: Web3Provider): JsonRpcProvider | Web3Provider => {
  return library ?? new JsonRpcProvider(url);
};

export const getCLUContract = (library: Web3Provider, account?: string): ethers.Contract => {
  return getContract(
    clucoinAbi,
    getCLUAddress(),
    getLibrary(urls[process.env.CHAIN].BSC, library),
    account
  );
};

export const getCLUoobersContract = (library: Web3Provider, account?: string): ethers.Contract => {
  return getContract(
    cluoobersAbi,
    getCLUoobersAddress(),
    getLibrary(urls[process.env.CHAIN].BSC, library),
    account
  );
};

export const getGoobersContract = (library: Web3Provider, account?: string): ethers.Contract => {
  return getContract(
    goobersAbi,
    getGoobersAddress(),
    getLibrary(urls[process.env.CHAIN].ETH, library),
    account
  );
};
