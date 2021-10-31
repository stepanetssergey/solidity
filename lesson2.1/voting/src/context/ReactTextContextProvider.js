import { useState } from 'react'
import ReactTextContext from "./ReactTextContext";



const ReactTextProvider = ({children}) => {
    const [colorCurrent, setCurrentColor] = useState(false)
    const setColor = (color) => {
        setCurrentColor(!colorCurrent)
    }

    const valueContextProvider = {
        setColor,
        colorReact: colorCurrent
    }

    return (
        <ReactTextContext.Provider value={valueContextProvider}>
            {children}
        </ReactTextContext.Provider>
    )
}

export default ReactTextProvider;