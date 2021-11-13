import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

const InitialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    fetching: false,
    error: null
};

const AuthContext = createContext(InitialState); //defaultstate is used when there's no provider

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, InitialState);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]); 

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                fetching: state.fetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };