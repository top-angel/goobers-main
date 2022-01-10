import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
// import { BscConnector } from "@binance-chain/bsc-connector";
import { JsonRpcFetchFunc, Web3Provider } from "@ethersproject/providers";

export const eth_chainId: 1 | 4 = parseInt(process.env.ETH_CHAIN_ID, 10) as 1 | 4;
export const bsc_chainId: 56 | 97 = parseInt(process.env.BSC_CHAIN_ID, 10) as 56 | 97;

const injected = new InjectedConnector({ supportedChainIds: [bsc_chainId, eth_chainId] });
const walletconnect = new WalletConnectConnector({
  qrcode: true,
  chainId: eth_chainId,
  pollingInterval: 12000,
  supportedChainIds: [eth_chainId],
  infuraId: "9e80b406ec0b4517a549db273d47ee11",
  clientMeta: {
    name: "Goobers",
    description: "",
    icons: [],
    url: "www.goobers.net",
  },
});
// const bscConnector = new BscConnector({ supportedChainIds: [bsc_chainId, eth_chainId] });

export enum ConnectorNames {
  // Binance = "Binance",
  Injected = "MetaMask",
  WalletConnect = "WalletConnect",
}

export const connectorsByName: { [connectorName in ConnectorNames]: unknown } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  // [ConnectorNames.Binance]: bscConnector,
};

export const getLibrary = (provider: JsonRpcFetchFunc): Web3Provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};
