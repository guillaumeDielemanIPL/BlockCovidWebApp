import React, { useState } from "react";

const Context = React.createContext(null);
    
const ProviderWrapper = (props) => {

    const [ error, setError ] = useState("");
    const [ status, setStatus ] = useState(localStorage.getItem("status"));

    const exposedValue = {
        error,
        setError,
        status,
        setStatus,
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