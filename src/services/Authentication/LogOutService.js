export const LogoutActionHandler = (authDispatch, navigateToPath) => {
    authDispatch({ type: "LOG-OUT" })
    localStorage.removeItem("authenticationToken");
    navigateToPath("/Logout");
}
