import '../../styles/main.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart } from 'react-icons/fa';
import { useCartAndWishList } from "../../context/index";
import "../ProductCard/ProductCard";

export const WishListCard = ({ product }) => {
    const { wishListState, wishListDispatch, cartState, cartDispatch } = useCartAndWishList();
    const { wishListItem } = wishListState;
    const {
        id,
        productName,
        price,
        offer,
        rating,
        ratingbymembers,
        image,
        categoryName,
    } = product;
    return (
        <div className="card-vertical pos-rel card-container flex-items display-flex-column card-vertical-shadow">
            <button type="button" className="btn-close"
            onClick={() =>
                wishListDispatch({
                    type: "REMOVE_ITEM_FROM_WISHLIST",
                    payload: product
                })
            } ></button>
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
                        <small className="discount-txt"> {offer}</small>
                    </span>
                    <pre className="rating-text">{rating}<FaStar className="rating" /> |{ratingbymembers}
                    </pre>
                </div>
                <div className="CTA-container">
                    <button className="btn-outline btn-on-hover wd-100-pc"
                     onClick={() =>
                        cartDispatch({ type: "ADD_ITEM_TO_CART", payload: product })
                    }>
                        <Link to="/Cart" className="link-no-style"
                           >Move to Cart</Link>
                    </button>
                </div>
            </div>
        </div>

    );
}