import { createContext } from "react";

const ReactTextContext = createContext({
    setColor: () => {},
    colorReact: false
})

export default ReactTextContext