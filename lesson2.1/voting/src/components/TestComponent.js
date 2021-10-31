import React, { useState } from 'react'
import TestNextComponent from './TestNextComponent'

export default function TestComponent({colorParent, changeParentComponentText, children}) {

    const [color, setColor] = useState(false)

    // useState(defaultParameter) [ parameter, functionSetParameter]

    const handlButtonClick = (event) => {
       setColor(!color)
    }

    return (
        <div>
            <p style={color && colorParent?{color:'red'}:{}}>Text component !!!!!</p>
            <button 
            onClick={event => {handlButtonClick(event)}}>
                TEST
            </button>

            <button onClick={changeParentComponentText}>
                Change Parent component text</button>

                <TestNextComponent/>
        </div>
    )
}
