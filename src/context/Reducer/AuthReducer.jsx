const initialAuthState = {
    loginStatus: false,
    authenticationToken: ""
}

const AuthReducer = (authState, authAction) => {
    const { type, payload } = authAction;
    switch (type) {
        case "LOG-IN":
            return { ...authState, ...payload.foundUser, authenticationToken: payload.encodedToken, loginStatus: true }
        case "LOG-OUT":
            return { ...initialAuthState }
        case "SIGN-UP":
            return { ...authState, ...payload.createdUser, authenticationToken: payload.encodedToken, loginStatus: true }
        default:
            return { ...authState }
    }
}
export { initialAuthState, AuthReducer }