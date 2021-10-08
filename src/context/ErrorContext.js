import { createContext, useState } from "react";

export const ErrorContext = createContext();

export function ErrorContextProvider(props) {
    const [ error, setError ] = useState();

    return(
        <ErrorContext.Provider value={{error, setError}}>
            {props.children}
        </ErrorContext.Provider>
    )
}