import "../../styles/login.css";
import { Link } from "react-router-dom";
import{FaEyeSlash}from "react-icons/fa";
export const Login =()=>{
    return (<div className="login-container wd-100-pc pos-rel flex-grow display-flex-column">
    <h1 className="auth-form-title">Login</h1>
    <form action="auth-form" className="wd-100-pc display-flex-column">
        <ul className="form-row wd-100-pc display-flex-column">
            <label htmlFor="Email address" className="label-style star-required-field">Email address</label>
            <input type="email" name="email" placeholder="username@gmail.com" id="Email address" className="input-box" required />
        </ul>
        <ul className="form-row wd-100-pc mr-lt-3 display-flex-column">
            <label htmlFor="password" className="label-style mr-label-pwd star-required-field">Password</label>
            <span className="password-eye-icon wd-100-pc pos-rel">
                <input type="password" name="password" placeholder="**************" id="password" className="input-box" required />
                <button className="card-btn eye-icon-container pos-abs">
                <FaEyeSlash className="qty-btn-color"/>
                </button>
            </span>
        </ul>
        <ul className="input-checkbox">
            <label htmlFor="checkbox" className="form-label label-style">
                <input type="checkbox" id="checkbox" className="form-checkbox-field"/>
                <span className="mr-lt-p5">Remember me <span className="forgot-pwd-style"> Forgot Password?</span></span>
            </label>
        </ul>
        <div className="form-row wd-100-pc display-flex-column">
            <button className="auth-btn ">
                <Link to="/" className="link-no-style">LOGIN</Link>
            </button>
        </div>
        <ul className="form-row wd-100-pc display-flex-column">
            <span>Not a member?
                <Link to="/SignUp" className="new-acc-style">Create New Account </Link>
            </span>
        </ul>
    </form>
</div>)
}