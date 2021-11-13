const LoginStart = (credential) => ({
    type: "LOGIN_START"
})

const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    data: user
})

const LoginError = (error) => ({
    type: "LOGIN_ERROR"
})

const LogOut = () => ({
    type: "LOGOUT"
})

export {LoginSuccess, LoginError, LoginStart, LogOut};