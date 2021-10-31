import React, { useState, useContext } from 'react'
import TestComponent from './TestComponent'
import ReactTextContext from '../context/ReactTextContext';

export default function Component() {

    const [color, setCurrentColor] = useState(false);
    const [colorText, setColorText] = useState(false)
    const { colorReact, setColor } = useContext(ReactTextContext)

    const handlChangeColor = () => {
        setCurrentColor(!color)
    }

    const handlChangeFromChild = () => {
        setColorText(!colorText)
    }


    return (
        <div>
            <p style={colorReact?{color:'red'}:{}}>REACT REACT REACT</p>
            <p  style={colorText?{color:'red'}:{}}> Parent component</p>
            <TestComponent 
               colorParent={color}
               changeParentComponentText={handlChangeFromChild}
               >
                   <p> CHILDREN FROM PARENT </p>

               </TestComponent>
            <button onClick={e => handlChangeColor(e)}>Set children color</button>
        </div>
    )
}
