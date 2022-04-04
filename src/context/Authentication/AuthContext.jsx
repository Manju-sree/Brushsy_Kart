import React, { createContext, useContext, useReducer } from "react";
import { AuthReducer, initialAuthState } from "../Reducer/AuthReducer";
const AuthenticationContext = createContext(null);
const useAuthentication = () => useContext(AuthenticationContext);

const AuthProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState);
    return (
        <AuthenticationContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export { useAuthentication, AuthProvider }