import { initContractInstance } from "../utils/initContract.js";

export const getDepositController = async (req, res) => {
    var contract = initContractInstance();
    const address = req.params.address
    const deposit = await contract.methods.UserDeposit(address).call(); 
    console.log(req.params)
    return res.status(200).send({deposit:parseInt(deposit)})
};

export const getTotalDepositController = async (req, res) => {
    var contract = initContractInstance();
    const deposit = await contract.methods.deposit().call(); 
    console.log(req.params)
    return res.status(200).send({totalDeposit:parseInt(deposit)})
};