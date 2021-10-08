import { createContext, useState } from "react";

export const ViewContext = createContext();

export function ViewContextProvider(props) {
    const [ verboseView, setVerboseView ] = useState(true);

    const toggleView = () => {
        setVerboseView(!verboseView);
    }

    return(
        <ViewContext.Provider value={{verboseView, toggleView}}>
            {props.children}
        </ViewContext.Provider>
    )
}