import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const IntialState = {
    user: null,
    fetching: false,
    error: null,
};

const AuthContext = createContext(IntialState);

const AuthContextProvider = ({ component }) => {
    const [state, dispatch] = useReducer(AuthReducer, IntialState);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                fetching: state.fetching,
                error: state.error,
                dispatch,
            }}
        >
            {component}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
