import React, {useState} from 'react'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import Config from '../../config'
export const injected = new InjectedConnector({ supportedChainIds: Config().CHAIN_ID })
export const walletconnect = new WalletConnectConnector({
    rpc: { 13137: Config().BLOCKCHAIN_NODE,
           3: 'https://ropsten.infura.io/v3/c7f74b7feee44d2882a7d6a845b91f25' },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: 12000,
  });

export default function Header() {
    
    const [connected, setConnected] = useState(false)
    const context = useWeb3React()
    const { account, activate, active, chainId, connector, deactivate } = context;

    const handlClickConnectWallet = (e) => {
        // setConnected(!connected)
        if (!active) {
            activate(walletconnect)
        }
        if (active) {
            deactivate()
        }
    }
    return (
        <div>
            <button 
               onClick={handlClickConnectWallet}
               style={active?{color:'red'}:{}} // style = {{color:'red', fontSize:'14px'}}
            >{active
            ?
            `Wallet ${account.substring(0,4)}....${account.substring(38,42)} Connected`
            :
            'Connect Wallet'}</button>
        </div>
    )
}
