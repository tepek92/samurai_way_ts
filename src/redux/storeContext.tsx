import React, {createContext} from "react";
import {store, StoreType} from "./store";

export const StoreContext = createContext({} as StoreType);

type ProviderPropsType = {
    store: StoreType
    children: React.ReactNode
}

export function Provider({store, children}: ProviderPropsType) {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}