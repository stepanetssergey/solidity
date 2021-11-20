const config = () => {
    const contractAbi = [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "UserDeposit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "deposit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_deposit",
              "type": "uint256"
            }
          ],
          "name": "addDeposit",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_deposit_remove",
              "type": "uint256"
            }
          ],
          "name": "removeDeposit",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    return {
        CONTRACT_ADDRESS:'0xB65739d46507cF5502bB10bBb8BD50b5Ef6BF8bf',
        CONTRACT_ABI: contractAbi,
        NODE_ADDRESS: 'http://127.0.0.1:8545',
        PRIVATE_KEY: '354188a2dda434f5d6b0cdc135185c62ce3f69176526fe333855da7062fb9941',
        FROM_ADDRESS: '0x36c47B8aaeaad481f54C8C931B01E7aa155cE42b',
        NONCE: 'Pleas sign this text'

    }
}

export default config;