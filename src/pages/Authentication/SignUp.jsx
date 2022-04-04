import "../../styles/signup.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthentication } from "../../context/index";
import { signUpActionHandler } from "../../services/index";
import { initialSignUpData } from "../../constants/index";

export const SignUp = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuthentication();
  const [signUpData, setSignUpData] = useState(initialSignUpData);
  const signUpHandler = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevSignUpData) => ({ ...prevSignUpData, [name]: value }));
  };
  return (
    <div className="signup-container wd-100-pc pos-rel flex-grow display-flex-column">
      <h1 className="auth-form-title">SignUp</h1>
      <form
        action="auth-form"
        className="wd-100-pc display-flex-column"
        onSubmit={(e) => {
          signUpActionHandler(e, signUpData, authDispatch, navigate);
        }}
      >
        <ul className="form-row wd-100-pc display-flex-column">
          <label
            htmlFor="First Name"
            className="label-style star-required-field"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="First Name"
            placeholder="Enter your first name"
            className="input-box"
            onChange={signUpHandler}
            required
          />
        </ul>
        <ul className="form-row wd-100-pc display-flex-column">
          <label htmlFor="Last Name" className="label-style">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="Last Name"
            placeholder="Enter your last name"
            className="input-box"
            onChange={signUpHandler}
            required
          />
        </ul>
        <ul className="form-row wd-100-pc display-flex-column">
          <label
            htmlFor="Email address"
            className="label-style star-required-field"
          >
            Email{" "}
          </label>
          <input
            type="email"
            name="email"
            placeholder="username@gmail.com"
            id="Email address"
            className="input-box"
            onChange={signUpHandler}
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
              id="password"
              placeholder="Enter New Password"
              className="input-box"
              onChange={signUpHandler}
              required
            />
          </span>
        </ul>
        <ul className="form-row wd-100-pc mr-lt-3 display-flex-column">
          <label
            htmlFor="conf-password"
            className="label-style mr-label-pwd  star-required-field"
          >
            Confirm Password
          </label>
          <span className="password-eye-icon wd-100-pc pos-rel">
            <input
              type="password"
              name="confpassword"
              id="conf-password"
              placeholder="Re-type your password"
              className="input-box "
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
            <span className="mr-lt-p5 ">I accept all Terms & Conditions</span>
          </label>
        </ul>
        <div className="form-row wd-100-pc display-flex-column">
          <button className="auth-btn">
              Create New Account
          </button>
        </div>
        <ul className="form-row wd-100-pc display-flex-column">
          <span>
            Already have an account?
            <Link to="/Login" className="new-acc-style">
              Login here
            </Link>
          </span>
        </ul>
      </form>
    </div>
  );
};
