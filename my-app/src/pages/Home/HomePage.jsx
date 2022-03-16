import "../../pages/Home/homepage.css";
import {Link} from "react-router-dom";
import { FaStar ,FaStarHalfAlt,FaSearch,FaHeart,FaShoppingCart} from "react-icons/fa";

const Home =()=>{
    return(<>
     {/* <!-- navigation bar --> */}
    <div className="navbar">
        <div className="logo">
            <Link to="/Home"><img src="./assets/images/nav_icons/nav-logo.png" alt="logo" className="logo-img"/></Link>
        </div>
        <div className="search-bar">
            <button className="search-bar-btn link-no-style">
               <FaSearch/>
            </button>
            <input className="search-bar-input" type="text" placeholder="Type to search"/>
        </div>
        <nav>
            <ul id="MenuItems">
                <li><Link to="/pages/Login.html">Login</Link></li>
                <li><Link to="/pages/products.html">Products</Link></li>
                <li>
                    <Link to="/pages/wishlist.html" className="badge-btn">
                       <FaHeart/>
                        <span className="badge-count">1</span>
                    </Link>
                </li>
                <li>
                    <Link to="/pages/cart.html" className="badge-btn">
                      <FaShoppingCart/>
                        <span className="badge-count">3</span>
                    </Link>
                </li>
            </ul>
        </nav>
        <img src="./assets/images/nav_icons/menu.png" alt="menu" className="menu-icon" onClick="menutoggle()"/>
    </div>
    {/* <!-- header container --> */}
    <div className="header">
        <div className="container">
            <div className="row-container">
                <div className="container-col-2">
                    <h1>BEAUTY ACCESSORIES</h1>
                    <p>Brushsy is a beauty store providing quality makeup brushes<br/> at reasonable cost all across India.</p>
                    <Link to="/pages/products.html" className="btn">Shop Now</Link>
                </div>
                <div className="container-col-2">
                    <img src="./assets/images/heroimg.png" alt="heroimage"/>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- featured categories --> */}
    <div className="categories">
        <div className="small-container">
            <div className="row-container">
                <div className="container-col-3">
                    <img src="./assets/images/products/pow5.png" alt="eyelinerbrush"/>
                </div>
                <div className="container-col-3">
                    <img src="./assets/images/products/eye1.png" alt="powderbrush"/>
                </div>
                <div className="container-col-3">
                    <img src="./assets/images/products/pow3.png" alt="blushbrush"/>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- featured products--> */}
    <div className="small-container">
        <h2 className="feat-title">Featured Products</h2>
        <div className="row-container">
            <div className="container-col-4">
                <img src="./assets/images/products/blush5.png" alt="blush5"/>
                <h4>Blush Brush</h4>
                <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                   <FaStarHalfAlt />
                </div>
                <p>$50.00</p>
            </div>
            <div className="container-col-4">
                <img src="./assets/images/products/pow3.png" alt="pow3"/>
                <h4>Blush Brush</h4>
                <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                   <FaStarHalfAlt />
                </div>
                <p>$100.00</p>
            </div>
            <div className="container-col-4">
                <img src="./assets/images/products/found7.png" alt="found7"/>
                <h4>Blush Brush</h4>
                <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                   <FaStarHalfAlt />
                </div>
                <p>$150.00</p>
            </div>
            <div className="container-col-4">
                <img src="./assets/images/products/blush4.png" alt="blush4"/>
                <h4>Blush Brush</h4>
                <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                   <FaStarHalfAlt />
                </div>
                <p>$250.00</p>
            </div>
        </div>
    </div>
    {/* <!-- brands --> */}
    <div className="brands">
        <div className="small-container">
            <h2 className="feat-title">Brands</h2>
            <div className="row-container">
                <div className="container-col-5">
                    <img src="./assets/images/brand_logos/colorbar.png" alt="colorbar"/>
                </div>
                <div className="container-col-5">
                    <img src="./assets/images/brand_logos/miniso_brand.png" alt="miniso"/>
                </div>
                <div className="container-col-5">
                    <img src="./assets/images/brand_logos/sugar_brand.png" alt="sugar"/>
                </div>
                <div className="container-col-5">
                    <img src="./assets/images/brand_logos/pac_brand.png" alt="pac"/>
                </div>
                <div className="container-col-5">
                    <img src="./assets/images/brand_logos/mac_brand.png" alt="mac"/>
                </div>
            </div>
        </div>
    </div>
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
                        <li><Link to="/pages/home.html" className="link">Home</Link></li>
                        <li><Link to="/pages/products.html" className="link">Products</Link></li>
                        <li><Link to="/pages/cart.html" className="link">My Cart</Link></li>
                        <li><Link to="/pages/wishlist.html" className="link">My Wishlist</Link></li>
                    </ul>
                </div>
            </div>
           <hr/>
            <p className="txt-cnt">Made with
                <span className="white-color">&lt;/&gt;</span> by Manjushree</p>
        </div>
    </div>
    </>);
}
export default Home;