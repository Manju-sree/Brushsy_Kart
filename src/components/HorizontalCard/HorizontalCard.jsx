import '../../styles/main.css';
import React from "react";
import { Link } from 'react-router-dom';
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaStar, FaTrashAlt } from "react-icons/fa";
import { useCartAndWishList } from "../../context/index";


export const HorizontalCard = ({ item }) => {
    const {
        id,
        productName,
        price,
        offer,
        rating,
        ratingbymembers,
        image,
        qty,
    } = item;
    const { cartState, cartDispatch, wishListState, wishListDispatch } = useCartAndWishList();
    const { wishListItem } = wishListState;

    //Add item to wishlist from cart and removing that item from cart.

    const addToWishListRemoveFromCart = (product) => {
        const newWishlistItem = wishListItem.some(
            (item) => item._id === product._id
        );

        if (newWishlistItem) {
            cartDispatch({ type: "REMOVE_ITEM_FROM_CART", payload: product });
        } else {
            cartDispatch({ type: "REMOVE_ITEM_FROM_CART", payload: product });
            wishListDispatch({ type: "ADD_ITEM_TO_WISHLIST", payload: product });
        }
    };
    return (<>
        <div className="card-horizontal flex-items box-shadow">
            <div className="image-container card-width">
                <img src={image} alt="product-image" className="card-img" />
            </div>
            <div className="card-text-container pos-rel text-wrapper-width ">
                <div className="text-container-title">
                    <h6 className="product-title">{productName}</h6>
                </div>
                <div className="text-container-desc">
                    <span className=" text-price-lighter"> Rs.{price}
                        <span className="text-price-strike text-price-lighter"> {price}</span>
                        <small className="discount-txt">  {offer}</small>
                    </span>
                    <pre className="rating-text">{rating}<FaStar className="rating" />|{ratingbymembers}
                    </pre>
                </div>
                <div className="CTA-container">

                    {item.qty === 1 ? (
                        <FaTrashAlt
                            onClick={() =>
                                cartDispatch({ type: "REMOVE_ITEM_FROM_CART", payload: item })
                            }
                        />
                    ) : (
                        <button className="card-btn qty-btn-color border-sqr">
                            <span className="qty-btn-icon">
                                <BiMinus
                                    onClick={() =>
                                        cartDispatch({ type: "DECREMENT_QUANTITY", payload: item })
                                    }
                                />
                            </span>
                        </button>
                    )}
                    <span className="cart-qty-style">{qty}</span>
                    <button className="card-btn qty-btn-color border-sqr">
                        <span className="qty-btn-icon">
                            <BiPlus
                                onClick={() =>
                                    cartDispatch({ type: "INCREMENT_QUANTITY", payload: item })
                                }
                            />
                        </span>
                    </button>
                    <div className="align-inline">
                        <button className="cart-btn-outline btn-on-hover margin-btn">
                            <Link to="/WishList" className="link-no-style" onClick={() => addToWishListRemoveFromCart(item)}>Move to Wishlist</Link>
                        </button>
                        <button className="cart-btn-outline btn-on-hover margin-btn">
                            <Link to="#" className="link-no-style"
                                onClick={() =>
                                    cartDispatch({ type: "REMOVE_ITEM_FROM_CART", payload: item })
                                }>Remove from cart</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}