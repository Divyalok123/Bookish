const LoginStart = (credential) => {
    return {
        type: "LOGIN_START"
    }
}

const LoginSuccess = (user) => {
    return {
        type: "LOGIN_SUCCESS",
        data: user
    }
}

const LoginError = (error) => {
    return {
        type: "LOGIN_ERROR",
        error: error
    }
}

export {LoginSuccess, LoginError, LoginStart};