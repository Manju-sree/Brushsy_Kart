import "../../styles/main.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Home = () => {
    return (<>
        {/* <!-- header container --> */}
        <div className="header">
            <div className="container">
                <div className="row-container">
                    <div className="container-col-2">
                        <h1>BEAUTY ACCESSORIES</h1>
                        <p>Brushsy is a beauty store providing quality makeup brushes<br /> at reasonable cost all across India.</p>
                        <Link to="/Products" className="btn">Shop Now</Link>
                    </div>
                    <div className="container-col-2">
                        <img src="/assets/images/heroimg.png" alt="heroimage" />
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- featured categories --> */}
        <div className="categories">
            <div className="small-container">
                <div className="row-container">
                    <div className="container-col-3">
                        {/* <!-- card with overlay--> */}
                        <div className="card-vertical pos-rel card-container flex-items display-flex-column card-vertical-shadow">
                            <div className="image-container badge-container pos-rel ">
                                <img src="/assets/images/products/pow5.png" alt="product-image" className="img-responsive card-img" />
                            </div>
                            <div className="text-overlay">
                                <div className="text-overlay-size dark-primary-color">25% off</div>
                            </div>
                            <div className="card-text-container pos-rel flex-grow display-flex-column">
                                <div className="text-container-title">
                                    <h6 className="product-title disable-font pos-rel">Foundation Makeup Brushes
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-col-3">
                        <div className="card-vertical pos-rel card-container flex-items display-flex-column card-vertical-shadow">
                            <div className="image-container badge-container pos-rel ">
                                <img src="/assets/images/products/eye1.png" alt="product-image" className="img-responsive card-img" />
                            </div>
                            <div className="text-overlay">
                                <div className="text-overlay-size dark-primary-color">50% off</div>
                            </div>
                            <div className="card-text-container pos-rel flex-grow display-flex-column">
                                <div className="text-container-title">
                                    <h6 className="product-title disable-font pos-rel">EyeLiner Makeup Brushes
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-col-3">
                        <div className="card-vertical pos-rel card-container flex-items display-flex-column card-vertical-shadow">
                            <div className="image-container badge-container pos-rel ">
                                <img src="/assets/images/products/pow3.png" alt="blushbrush" className="img-responsive card-img" />
                            </div>
                            <div className="text-overlay">
                                <div className="text-overlay-size dark-primary-color">15% off</div>
                            </div>
                            <div className="card-text-container pos-rel flex-grow display-flex-column">
                                <div className="text-container-title">
                                    <h6 className="product-title disable-font pos-rel">Blush Makeup Brushes
                                    </h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        {/* <!-- featured products--> */}
        <div className="small-container">
            <h2 className="feat-title">Featured Products</h2>
            <div className="row-container">
                <div className="container-col-4">
                    <img src="/assets/images/products/blush5.png" alt="blush5" />
                    <h4>Blush MakeUp Brush</h4>
                    <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <p>Rs. 500.00</p>
                </div>
                <div className="container-col-4">
                    <img src="/assets/images/products/pow3.png" alt="pow3" />
                    <h4>Blush Highlighter Brush</h4>
                    <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <p>Rs. 900.00</p>
                </div>
                <div className="container-col-4">
                    <img src="/assets/images/products/found7.png" alt="found7" />
                    <h4>Concealer MakeUp Brush</h4>
                    <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <p>Rs. 600.00</p>
                </div>
                <div className="container-col-4">
                    <img src="/assets/images/products/blush4.png" alt="blush4" />
                    <h4>Foundation Brush</h4>
                    <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <p>Rs. 500.00</p>
                </div>
            </div>
        </div>
        {/* <!-- brands --> */}
        <div className="brands">
            <div className="small-container">
                <h2 className="feat-title">Brands</h2>
                <div className="row-container">
                    <div className="container-col-5">
                        <img src="/assets/images/brand_logos/colorbar.png" alt="colorbar" />
                    </div>
                    <div className="container-col-5">
                        <img src="/assets/images/brand_logos/miniso_brand.png" alt="miniso" />
                    </div>
                    <div className="container-col-5">
                        <img src="/assets/images/brand_logos/sugar_brand.png" alt="sugar" />
                    </div>
                    <div className="container-col-5">
                        <img src="/assets/images/brand_logos/pac_brand.png" alt="pac" />
                    </div>
                    <div className="container-col-5">
                        <img src="/assets/images/brand_logos/mac_brand.png" alt="mac" />
                    </div>
                </div>
            </div>
        </div>

    </>);
}
