import '../../styles/main.css';
import React from "react";
import { Link } from 'react-router-dom';
import { FaStar, FaHeart } from 'react-icons/fa';
import { useCartAndWishList } from "../../context/index";
import "../ProductCard/ProductCard";

export const HorizontalCard = ({ product }) => {
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
    const { cartState, cartDispatch, wishListState, wishListDispatch } =useCartAndWishList();
  const { wishListItem } = wishListState;
    return(<>
    <div className="card-horizontal flex-items box-shadow">
        <div className="image-container card-width">
            <img src={image} alt="product-image" className="card-img"/>
        </div>
        <div className="card-text-container pos-rel text-wrapper-width ">
            <div className="text-container-title">
                <h6 className="product-title">{productName}</h6>
            </div>
            <div className="text-container-desc">
                <span className=" text-price-lighter"> Rs.{price}
                    <span className="text-price-strike text-price-lighter "> Rs.1500</span>
                <small className="discount-txt">  {offer}</small>
                </span>
                <pre className="rating-text">5<i className="fa fa-solid fa-star rating"></i> |{ratingbymembers}  
            </pre>
            </div>
            <div className="CTA-container">
                <button className="card-btn qty-btn-color border-sqr">
                    <span className="qty-btn-icon">
                        <i className="fas fa-minus"></i>
                    </span>
                </button>
                <span className="cart-qty-style">3</span>
                <button className="card-btn qty-btn-color border-sqr">
                    <span className="qty-btn-icon">
                        <i className="fas fa-plus"></i>
                    </span>
                </button>
                <div className="align-inline">
                    <button className="cart-btn-outline btn-on-hover margin-btn">
                    <Link to="/WishList" className="link-no-style ">Move to Wishlist</Link>
                    </button>
                    <button className="cart-btn-outline btn-on-hover margin-btn">
                        <Link to="#" className="link-no-style">Remove from cart</Link>
                    </button>
                </div>

            </div>
        </div>
    </div>
    </>)}