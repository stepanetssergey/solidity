var AccountingABI = require('../build/contracts/Accounting.json');
var HDWalletProvider = require('truffle-hdwallet-provider');
var Web3 = require('web3');

const readDeposit = async () => {
const network = 1637404755618;
const rpcNodeAddress = 'http://127.0.0.1:8545'
const developmentChainKey = '354188a2dda434f5d6b0cdc135185c62ce3f69176526fe333855da7062fb9941'

// const AccountingAddress = '0xB65739d46507cF5502bB10bBb8BD50b5Ef6BF8bf';
const AccountingAddress = AccountingABI.networks[network].address;

// 1. address 2. abi(interface) 3. walletProvider (key)


var web3 = new Web3(rpcNodeAddress)
var AccountingContract = new web3.eth.Contract(AccountingABI.abi, AccountingAddress);
const deposit = await AccountingContract.methods.deposit().call(); // call - reade send - ethers, .....
console.log(deposit)
}

const addDeposit = async (deposit) => {
    const network = 1637404755618;
    const rpcNodeAddress = 'http://127.0.0.1:8545'
    const developmentChainKey = '354188a2dda434f5d6b0cdc135185c62ce3f69176526fe333855da7062fb9941'
    // const AccountingAddress = '0xB65739d46507cF5502bB10bBb8BD50b5Ef6BF8bf';
    const AccountingAddress = AccountingABI.networks[network].address;
    var provider = new HDWalletProvider(developmentChainKey, rpcNodeAddress);
    var web3 = new Web3(provider)
    var AccountingContract = new web3.eth.Contract(AccountingABI.abi, AccountingAddress);
    return await AccountingContract.methods
          .addDeposit(deposit)
          .send({from: '0x36c47B8aaeaad481f54C8C931B01E7aa155cE42b'}).then(result => console.log(result))
}

const init = async() => {
    await addDeposit(500)
    await readDeposit()
}

init()
