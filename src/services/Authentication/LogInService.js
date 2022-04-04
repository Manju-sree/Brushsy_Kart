import axios from "axios";
export const LoginActionHandler = (e,logInDataProvided,authDispatch,navigateToPath) => {
  e.preventDefault();
  (async () => {
    try {
      const { data, status } = await axios.post(`/api/auth/login`, logInDataProvided);
      if (status === 200) {
        authDispatch({ type: "LOG-IN", payload: data });
       
        localStorage.setItem("authenticationToken", data.encodedToken);
        navigateToPath("/Products");
      }
    } catch {
      console.error("LOGIN FAILED");
    }
  })();
};
