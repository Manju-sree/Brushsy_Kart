import "../../styles/main.css";
import { Link } from "react-router-dom";

export const NavBarBottom = () => {
    return (
        <>
        {/* <!-- footer --> */}
    <div className="footer">
        <div className="container">
            <div className="row-container">
                <div className="footer-col-1">
                    <h3>Follow me</h3>
                    <ul className="quick-links">
                        <li><Link to="#" className="link">Twitter</Link></li>
                        <li><Link to="https://github.com/Manju-sree/Brushsy_mart" className="link">Github</Link></li>
                        <li><Link to="#" className="link">LinkedIn</Link></li>
                        <li><Link to="#" className="link">Instagram</Link></li>
                    </ul>
                </div>
                <div className="footer-col-2">
                    <h3>Quick links</h3>
                    <ul className="quick-links">
                        <li><Link to="/Home" className="link">Home</Link></li>
                        <li><Link to="/Products" className="link">Products</Link></li>
                        <li><Link to="/Cart" className="link">My Cart</Link></li>
                        <li><Link to="/WishList" className="link">My Wishlist</Link></li>
                    </ul>
                </div>
            </div>
           <hr/>
            <p className="txt-cnt">Made with
                <span className="white-color">&lt;/&gt;</span> by Manjushree</p>
        </div>
    </div> 
        </>
    );
}
