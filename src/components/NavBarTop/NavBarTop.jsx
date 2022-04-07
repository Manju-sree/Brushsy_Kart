import "../../styles/home.css";
import { Link,NavLink,useNavigate } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCartAndWishList,useAuthentication } from "../../context/index";
import { LogoutActionHandler } from "../../services/index";

export const NavBarTop = () => {
    const { cartState, wishListState } = useCartAndWishList();
    const { cartItem, cartCount } = cartState;
    const { wishListItem, wishListCount } = wishListState;

    const navigate = useNavigate();
    const { authState, authDispatch } = useAuthentication();
    const { loginStatus } = authState;
    const activeNavLinkStyles = ({ isActive }) => {
        return {
          color: isActive ? "#e63961" : "#555",
        };
      };
      
    return (
        <>
            {/* <!-- navigation bar --> */}
            <div className="navbar">
                <div className="logo">
                    <Link to="/"><img src="./assets/images/nav_icons/nav-logo.png" alt="logo" className="logo-img" /></Link>
                </div>
                <div className="search-bar">
                    <button className="search-bar-btn link-no-style">
                        <FaSearch />
                    </button>
                    <input className="search-bar-input" type="text" placeholder="Type to search" />
                </div>
                <nav>
                    <ul>
                    {loginStatus ?<li onClick={() => { LogoutActionHandler(authDispatch, navigate) }}>
                        <NavLink to="/Login" style={activeNavLinkStyles}>Logout</NavLink>
                        </li>:
                        <li><NavLink to="/Login" style={activeNavLinkStyles}>Login</NavLink></li>}
                        <li><NavLink to="/Products" style={activeNavLinkStyles}>Shop</NavLink></li>
                        <li>
                            <NavLink to="/WishList" style={activeNavLinkStyles} className="badge-btn">
                                <FaHeart />
                                {wishListItem.length === 0 ? (null):(
                                <span className="badge-count">{wishListCount}</span>)}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Cart" style={activeNavLinkStyles}className="badge-btn">
                                <FaShoppingCart />
                                {cartItem.length===0?(""):(
                                <span className="badge-count">{cartCount}</span>)}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    );
}
