import { recoverPersonalSignature } from "eth-sig-util";
import { bufferToHex } from "ethereumjs-util";
import Config from '../config/index.js'

export const checkSignature = async (req, res) => {
    const {signature, address} = req.body;
    const msg = Config().NONCE
    const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'));
    const addressFromSignature = recoverPersonalSignature({
        data: msgBufferHex,
        sig: signature
    })
    console.log(addressFromSignature)
    console.log(address)
    if (Config().FROM_ADDRESS.toUpperCase() === addressFromSignature.toUpperCase()) {
        return res.status(200).send({
            auth: true
        })
    } else {
        return res.status(200).send({
            auth: false
        })
    }
}