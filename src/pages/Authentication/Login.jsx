import "../../styles/login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  initialLogInData,
  loginAsGuestCredentials,
} from "../../constants/index";
import { useAuthentication } from "../../context/index";
import { LoginActionHandler } from "../../services/index";

export const Login = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuthentication();
  const [loginData, setLoginData] = useState(initialLogInData);
  const LogInDataHandler = (e) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({ ...prevLoginData, [name]: value }));
  };
  return (
    <div className="login-container wd-100-pc pos-rel flex-grow display-flex-column">
      <h1 className="auth-form-title">Login</h1>
      <form
        action="auth-form"
        className="wd-100-pc display-flex-column"
        onSubmit={(e) => {
          LoginActionHandler(e, loginData, authDispatch, navigate);
        }}
      >
        <ul className="form-row wd-100-pc display-flex-column">
          <label
            htmlFor="Email address"
            className="label-style star-required-field"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            placeholder="username@gmail.com"
            id="Email address"
            className="input-box"
            onChange={LogInDataHandler}
            required
          />
        </ul>
        <ul className="form-row wd-100-pc mr-lt-3 display-flex-column">
          <label
            htmlFor="password"
            className="label-style mr-label-pwd star-required-field"
          >
            Password
          </label>
          <span className="password-eye-icon wd-100-pc pos-rel">
            <input
              type="password"
              name="password"
              placeholder="**************"
              id="password"
              className="input-box"
              onChange={LogInDataHandler}
              required
            />
          </span>
        </ul>
        <ul className="input-checkbox">
          <label htmlFor="checkbox" className="form-label label-style">
            <input
              type="checkbox"
              id="checkbox"
              className="form-checkbox-field"
            />
            <span className="mr-lt-p5">
              Remember me{" "}
              <span className="forgot-pwd-style"> Forgot Password?</span>
            </span>
          </label>
        </ul>
        <div className="form-row wd-100-pc display-flex-column">
          <button
            className="auth-btn"
            onClick={(event) => {
              LoginActionHandler(
                event,
                loginAsGuestCredentials,
                authDispatch,
                navigate
              );
            }}
          >
            LOGIN AS GUEST
          </button>
        </div>
        <div className="form-row wd-100-pc display-flex-column">
          <button className="auth-btn" type="submit">
            LOGIN
          </button>
        </div>
        <ul className="form-row wd-100-pc display-flex-column">
          <span>
            Not a member?
            <Link to="/SignUp" className="new-acc-style">
              Create New Account{" "}
            </Link>
          </span>
        </ul>
      </form>
    </div>
  );
};
