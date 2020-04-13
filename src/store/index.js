import React, {createContext, useContext} from "react";
import {initState, reducer} from "./reducers";
import {useEnhanceReducer} from "../util/hooks/useEnhanceReducer";

let storeCtx = createContext(initState);
let dispatchCtx = createContext(0);

const Provider = (props) => {

    let [state, dispatch] = useEnhanceReducer(reducer, initState);

    return (
        <dispatchCtx.Provider value={dispatch}>
            <storeCtx.Provider value={state}>{props.children}</storeCtx.Provider>
        </dispatchCtx.Provider>
    )
};

const useRootDispatch = () => useContext(dispatchCtx);
const useRootStore = (nameSpace) => {
    let state = useContext(storeCtx);
    return nameSpace ? state[nameSpace] : state;
};

export {
    Provider,
    useRootDispatch,
    useRootStore
}
