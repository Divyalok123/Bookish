const AuthReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_SUCCESS":
            return {
                user: action.data,
                fetching: false,
                error: null
            };
        case "LOGIN_START":
            return {
                user: null,
                fetching: true,
                error: null
            };
        case "LOGIN_ERROR":
            return {
                user: null,
                fetching: false,
                error: action.error
            };
        default: 
            return state;
    }
}

export default AuthReducer;