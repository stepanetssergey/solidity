import Voting from '../contracts/Voting.json'
import VERC20 from '../contracts/VERC20.json'


export const drizzleOptions = {
    contracts: [Voting, VERC20],
    web3: {
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:8545"
        }
    }
}
