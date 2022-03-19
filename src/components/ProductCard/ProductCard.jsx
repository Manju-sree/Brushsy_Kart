import "../../styles/main.css";
import React from 'react'
import { Link } from 'react-router-dom';
import { FaStar, FaHeart,} from "react-icons/fa";
export const ProductCard = () => {
    <>
        <div className="filter-grid-right">
            {/* <!-- card with badge --> */}
            <div className="card-vertical pos-rel card-container flex-items display-flex-column card-vertical-shadow">
                <div className="image-container badge-container pos-rel ">
                    <img src={image} alt="product-image" className="img-responsive card-img"/>
                        
                        {isOffer && (
                    <span className="badge-on-card ">OFFER</span>
                  )}
                      {isNew && (
                    <span className="badge-on-card ">NEW</span>
                  )}
                </div>
                {!inStock &&( <div className="text-overlay">
                    <div className="text-overlay-size dark-primary-color">Out of stock</div>
                </div>)}
               
                <div className="card-text-container pos-rel flex-grow display-flex-column">
                    <div className="text-container-title">
                        <h6 className="product-title pos-rel">{productName}
                            <button className="like-btn link-no-style">
                                <span><FaHeart className="wish-icon"/></span>
                            </button>
                        </h6>

                    </div>
                    <div className="text-container-desc  flex-grow display-flex-column">
                        <span className=" text-price-lighter"> Rs.{price}
                            <small className="discount-txt">({offer})</small>
                        </span>
                        <pre className="rating-text">{rating}<FaStar className="rating"/> |{ratingbymembers}
                        </pre>
                    </div>
                    <div className="CTA-container">
                        <button className="btn-outline btn-on-hover wd-100-pc mr-bt ">
                            <Link to="/Cart" className="link-no-style">Add to Cart</Link>
                        </button>
                        {!inStock && (<button className="btn-outline btn-disabled  wd-100-pc mr-bt ">
                            <Link to="#" className="link-no-style">Out of Stock</Link>
                        </button>)}
                        
                        <button className="btn-outline btn-on-hover wd-100-pc mr-bt  ">
                            <Link to="/Cart" className="link-no-style">Add to Wishlist</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
