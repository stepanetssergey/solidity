import React from 'react'
import { drizzleReactHooks } from '@drizzle/react-plugin'
import { newContextComponents} from '@drizzle/react-components'

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { ContractData, ContractForm } = newContextComponents;

export default function AddSubjects() {
    const { drizzle } = useDrizzle()
    const state = useDrizzleState(state => state)
    
    return (
        <>
        <div>
            Add Subject
        </div>
        <div>
            <ContractForm 
            drizzle = {drizzle}
            drizzleState = {state}
            contract = "Voting"
            method = "addSubject"
            />
        </div>
        </>
    )
}
