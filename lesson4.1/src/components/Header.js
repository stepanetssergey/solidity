import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector';

export const injected = new InjectedConnector({
    supportedChainIds: [1337],
});

export default function Header() {
    
    const context = useWeb3React()
    const { active, activate, deactivate, account } = context;
    const handlConnectWallet = () => {
     if (active) {
         deactivate()
     } else {
        activate(injected)
     }
    }
    return (
        <div>
            <button onClick={handlConnectWallet}>
                {!active? `Connect Wallet`:`${account.substring(0,4)}...${account.substring(38,42)}`}
            </button>
        </div>
    )
}
