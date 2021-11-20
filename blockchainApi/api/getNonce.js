import Config from '../config/index.js'

export const getNonce = (req, res) => {
    return res.status(200).send({message: Config().NONCE})
}