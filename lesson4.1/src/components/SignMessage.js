import React from 'react'
import { useWeb3React } from '@web3-react/core'

export default function SignMessage() {
    
    const {active, library, account } = useWeb3React();

    const [nonce, setNonce] = React.useState('')
    const [signature, setSignature] = React.useState('')
    const [login, setLogin] = React.useState(false)
    
    const handlSign = () => {
        console.log('Sign')
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("http://localhost:8000/nonce", requestOptions)
          .then(response => response.text())
          .then(result => {
            setNonce(JSON.parse(result).message)
          })
          .catch(error => console.log('error', error));
        
    }
    const handlSignMessage = async () => {
        await library.getSigner(account)
                    .signMessage(nonce).then(result => {
                        setSignature(result)
                    })
    }

    const handlSendToBackend = () => {
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({signature: signature, address: account})

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8000/auth", requestOptions)
  .then(response => response.text())
  .then(result => setLogin(JSON.parse(result).auth))
  .catch(error => console.log('error', error));
    }
    return (
        <div>
            <div>
        Login Page
      </div>
      {login && <div style={{color:'red'}}>
         YOU ARE LOGED IN !!!!!! SUCCESS
      </div>}
      <div>
        {nonce}
      </div>
      {active &&
      <>
      <button onClick={handlSign}>getMessage</button>
      <button onClick={handlSignMessage}>Sing Message</button>
      <button onClick={handlSendToBackend}>LOGIN</button>
      </>
      }
      
        </div>
    )
}
