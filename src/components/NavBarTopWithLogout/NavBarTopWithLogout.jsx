import "../../components/NavBarTop/navbartop.css";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

export const NavBarTopWithLogout = () => {
    return (
        <>
            {/* <!-- navigation bar --> */}
            <div className="navbar">
                <div className="logo">
                    <Link to="/Home"><img src="./assets/images/nav_icons/nav-logo.png" alt="logo" className="logo-img" /></Link>
                </div>
                <div className="search-bar">
                    <button className="search-bar-btn link-no-style">
                        <FaSearch />
                    </button>
                    <input className="search-bar-input" type="text" placeholder="Type to search" />
                </div>
                <nav>
                    <ul id="MenuItems">
                        <li><Link to="/Logout">Logout</Link></li>
                        <li><Link to="/Products">Products</Link></li>
                        <li>
                            <Link to="/WishList" className="badge-btn">
                                <FaHeart />
                                <span className="badge-count">1</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Cart" className="badge-btn">
                                <FaShoppingCart />
                                <span className="badge-count">3</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <img src="./assets/images/nav_icons/menu.png" alt="menu" className="menu-icon" onClick="menutoggle()" />
            </div>

        </>
    );
}
