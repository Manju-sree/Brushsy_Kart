import "../../styles/logout.css";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {NavBarBottom,NavBarTop} from "../../components/index";

export const Logout = () => {
  return (<>
    <NavBarTop/>
    <div className="logout-container wd-100-pc pos-rel flex-grow display-flex-column logout-icon txt-cnt">
      <h2 className="auth-form-title">
        {" "}
        <FaCheckCircle className="fa-circle-check" />
        Logged Out Successfully
      </h2>
      <div className="wd-100-pc mr-bt display-flex-column ">
        <Link to="/Login" className="new-acc-style dark-primary-color ">
          Login
        </Link>
      </div>
      <div className="wd-100-pc mr-bt display-flex-column ">
        <Link to="/" className="new-acc-style dark-primary-color ">
          Go to Home
        </Link>
      </div>  
    </div>
    <div className="space-divider"></div>
    <NavBarBottom/>
    </>
  );
};
