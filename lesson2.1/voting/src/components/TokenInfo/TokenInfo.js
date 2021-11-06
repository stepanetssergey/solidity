import React from 'react'
import { drizzleReactHooks } from '@drizzle/react-plugin'
import { newContextComponents } from '@drizzle/react-components'

const { useDrizzle, useDrizzleState } = drizzleReactHooks
const { ContractData } = newContextComponents;

export default function TokenInfo() {

    const { drizzle } = useDrizzle()
    const state = useDrizzleState(state => state)

    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <div>
            Tottal supply Vote TOKEN:  <ContractData 
                drizzle = {drizzle}
                drizzleState = {state}
                contract = "VERC20"
                method="totalSupply"
             />
            </div>
            <div>
          Get current account balance: <ContractData 
                drizzle = {drizzle}
                drizzleState = {state}
                contract = "VERC20"
                method="balanceOf"
                methodArgs={[state.accounts[0]]}
             />
             </div>
        </div>
    )
}
