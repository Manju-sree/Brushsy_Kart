import '../../styles/main.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart } from 'react-icons/fa';

export const WishListCard = ({product}) => {
    const {
        id,
        productName,
        price,
        offer,
        rating,
        ratingbymembers,
        image,
        categoryName,
    }= product;
    return (
        <>
        <h1 className="wishlist-title">My Wishlist <span className="wishlist-subtitle">(6 items)</span></h1>
    <div className="wishlist-card-container">
        <div className="card-vertical pos-rel card-container flex-items display-flex-column card-vertical-shadow">
            <button type="button" className="btn-close"></button>
            <div className="image-container  pos-rel ">
                <img src={image} alt={categoryName} className="img-responsive card-img" />
            </div>
            <div className="card-text-container pos-rel flex-grow display-flex-column">
                <div className="text-container-title">
                    <h6 className="product-title pos-rel">{productName}
                        <button className="like-btn link-no-style">
                            <span><FaHeart className="wished-icon" /></span>
                        </button>
                    </h6>

                </div>
                <div className="text-container-desc  flex-grow display-flex-column">
                    <span className=" text-price-lighter"> Rs.{price}
                        <small className="discount-txt">{offer}</small>
                    </span>
                    <pre className="rating-text">{rating}<FaStar className="rating" /> |{ratingbymembers}
                    </pre>
                </div>
                <div className="CTA-container">
                    <button className="btn-outline btn-on-hover wd-100-pc">
                        <Link href="/pages/cart.html" classNameName="link-no-style">Add to Cart</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
        );
}