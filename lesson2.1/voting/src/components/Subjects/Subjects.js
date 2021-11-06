import React from 'react'
import { drizzleReactHooks } from '@drizzle/react-plugin'
import { newContextComponents} from '@drizzle/react-components'

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { ContractData } = newContextComponents;

export default function Subjects() {
    const  { drizzle } = useDrizzle()
    const state = useDrizzleState(state => state)
    
    return (
        <div>
            <ContractData 
                drizzle = {drizzle}
                drizzleState = {state}
                contract = "Voting"
                method="getAllSubjects"
             />
            
        </div>
    )
}
