import axios from 'axios';
export const signUpActionHandler = (e, signUpDataProvided, authDispatch, navigateToPath) => {
    e.preventDefault();
    (async () => {
        try {
            const { data, status } = await axios.post(`/api/auth/signup`,signUpDataProvided)
            if (status === 201) {
                authDispatch({ type: "SIGN-UP", payload: data })
                localStorage.setItem("authenticationToken", data.encodedToken);
                navigateToPath("/Products")
            }
        } catch {
            console.error("SIGN UP FAILED");
        }
    })()
}
