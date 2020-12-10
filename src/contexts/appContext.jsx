import React, { useState } from "react";

const Context = React.createContext(null);
    
const ProviderWrapper = (props) => {

    const [ error, setError ] = useState("");
    const [ role, setRole ] = useState(localStorage.getItem("role"));

    const exposedValue = {
        error,
        setError,
        role,
        setRole,
    }

    return (
        <Context.Provider value={exposedValue}>
            { props.children }
        </Context.Provider>
    )
}

export {
    Context,
    ProviderWrapper,
}
export default Context;