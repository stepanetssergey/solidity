import bodyParser from "body-parser";
import cors from 'cors';
import express from 'express';
import { getDepositController, getTotalDepositController } from "./api/getDeposit.js";
import { addDeposit } from "./api/addDeposit.js";
import { getNonce } from "./api/getNonce.js";
import { checkSignature } from './api/getSignature.js';


const app = express();

// Middlewares
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.get('/', (req,res) => {
    return res.status(200).send('Main page')
})
app.get('/deposit/:address', getDepositController)
app.get('/totalDeposit', getTotalDepositController)
app.get('/nonce', getNonce)

app.post('/deposit', addDeposit)
app.post('/auth', checkSignature)

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Deposit backend was started on port ${port}`)
})
