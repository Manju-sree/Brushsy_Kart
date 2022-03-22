import "../../styles/main.css";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCartAndWishList } from "../../context/index";

export const NavBarTop = () => {
    const { cartState, wishListState } = useCartAndWishList();
    const { cartItem, cartCount } = cartState;
    const { wishListItem, wishListCount } = wishListState;
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
                    <ul id="MenuItems">
                        <li><Link to="/Login">Login</Link></li>
                        <li><Link to="/Products">Products</Link></li>
                        <li>
                            <Link to="/WishList" className="badge-btn">
                                <FaHeart />
                                {wishListItem.length === 0 ? (null):(
                                <span className="badge-count">{wishListCount}</span>)}
                            </Link>
                        </li>
                        <li>
                            <Link to="/Cart" className="badge-btn">
                                <FaShoppingCart />
                                {cartItem.length===0?(""):(
                                <span className="badge-count">{cartCount}</span>)}
                            </Link>
                        </li>
                    </ul>
                </nav>
                <img src="./assets/images/nav_icons/menu.png" alt="menu" className="menu-icon" onClick="menutoggle()" />
            </div>

        </>
    );
}
