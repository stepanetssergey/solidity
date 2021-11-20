import Web3 from "web3";
import HDWalletProvider from "@truffle/hdwallet-provider";
import Config from '../config/index.js'

export const initContractInstance = () => {
    const rpcNodeAddress = Config().NODE_ADDRESS;
    var web3 = new Web3(rpcNodeAddress)
    var Contract = new web3.eth.Contract(Config().CONTRACT_ABI, Config().CONTRACT_ADDRESS)
    return Contract;
}
