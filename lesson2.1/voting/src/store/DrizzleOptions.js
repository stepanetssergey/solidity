import Voting from '../contracts/Voting.json'
import VERC20 from '../contracts/VERC20.json'
import Web3 from 'web3';



export const drizzleOptions = {
    contracts: [Voting, VERC20],
    web3: {
        fallback: {
          customProvider: new Web3('https://ropsten.infura.io/v3/c7f74b7feee44d2882a7d6a845b91f25')
        }
    }
}
