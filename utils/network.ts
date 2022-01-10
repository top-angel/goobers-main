export const chains = {
  1: {
    chainId: "0x1",
    chainName: "Ethereum Mainnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.infura.io/v3/66a94473443048d2824162440a57c2ca"],
    blockExplorerUrls: ["https://etherscan.io"],
  },
  4: {
    chainId: "0x4",
    chainName: "Rinkeby Test Network",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rinkeby.infura.io/v3/66a94473443048d2824162440a57c2ca"],
    blockExplorerUrls: ["https://rinkeby.etherscan.io"],
  },
  56: {
    chainId: "0x38",
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  97: {
    chainId: "0x61",
    chainName: "Binance Smart Chain Testnet",
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
    blockExplorerUrls: ["https://testnet.bscscan.com"],
  },
};

export const setupNetwork = async (chainId: keyof typeof chains): Promise<boolean> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const provider = (window as any).ethereum;
  if (provider) {
    try {
      await provider
        .request({
          method: "wallet_addEthereumChain",
          params: [chains[chainId]],
        })
        .catch(() =>
          provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: `0x${chainId.toString(16)}` }],
          })
        );
      return true;
    } catch (error) {
      console.error("Failed to setup the network in Metamask:", error);
      return false;
    }
  } else {
    console.error("Can't setup the BSC network on metamask because window.ethereum is undefined");
    return false;
  }
};

export const registerToken = async (
  tokenAddress: string,
  tokenSymbol: string,
  tokenDecimals: number
): Promise<boolean> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tokenAdded = await (window as any).ethereum?.request({
    method: "wallet_watchAsset",
    params: {
      type: "ERC20",
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
      },
    },
  });

  return tokenAdded;
};
