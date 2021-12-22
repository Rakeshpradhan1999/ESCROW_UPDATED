import { InjectedConnector } from "@web3-react/injected-connector";

export const Injected = new InjectedConnector({
    supportedChainIds:[1, 5, 97, 56]//chain ids for ethereum, goerli, bsc test net , bsc main net
})