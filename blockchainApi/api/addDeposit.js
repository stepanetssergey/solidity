import { initContractInstance } from "../utils/initContract.js";
import Config from '../config/index.js'

// { deposit: number }
export const addDeposit = async (req, res) => {
    var contract = initContractInstance();
    const { deposit } = req.body;
    await contract.methods
          .addDeposit(deposit)
          .send({from: Config().FROM_ADDRESS}).then(result => console.log(result))
    return res.status(200).send({deposit: deposit})
}


// sign me pleas
// text -> sing(text) -> signature -> = from what address it was signed 111111%