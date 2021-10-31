import React, { useContext } from 'react'
import ReactTextContext from '../context/ReactTextContext'

export default function TestNextComponent() {

    const { colorReact, setColor } = useContext(ReactTextContext)

    const handlClickTextReact = () => {
       setColor(!colorReact)
    }

    return (
        <div>
            <button
            onClick={handlClickTextReact}
            >Change React Text</button>
        </div>
    )
}
