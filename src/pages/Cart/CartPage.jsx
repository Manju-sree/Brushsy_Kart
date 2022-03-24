import React from "react";
import { ErrorMessage, HorizontalCard } from "../../components/index";
import { Link } from "react-router-dom";
import { useCartAndWishList } from "../../context/index";
import "../../styles/cart.css";

export const Cart = () => {
    const { cartState, cartDispatch, wishListState, wishListDispatch } =
    useCartAndWishList();
  const { cartItem, cartCount } = cartState;
  return (
    <>
      <h1 className="wishlist-title">My Cart</h1>
      {cartItem.length === 0 ? (
        <Link to="/Products">
          <ErrorMessage message={"your cart is empty"} />
        </Link>
      ) : (
      <div className="wishlist-card-container">
        <ul className="cart-left-container">
          <li>
          {cartItem.map((item) => {
            return <HorizontalCard key={item._id} item={item}/>
        })}
          </li>
        </ul>
        <div className="cart-right-container">
          <div className="price-details-style">PRICE DETAILS</div>
          <hr />
          <div className="bill-details-row">
            <div className="col-left-wd ">Price ({cartCount} items)</div>
            <div className="col-right-wd  text-align-right">₹3000.00</div>
          </div>
          <div className="bill-details-row">
            <div className="col-left-wd ">Discount </div>
            <div className="col-right-wd  text-align-right primary-color">
              ₹600.00
            </div>
          </div>
          <div className="bill-details-row ">
            <div className="col-left-wd ">Devilvery charges</div>
            <span className="text-price-strike">₹99 </span>
            <span className="primary-color">FREE</span>
            <div className="col-right-wd  text-align-right"></div>
          </div>
          <div className="bill-details-row">
            <div className="col-left-wd ">Total Amount</div>
            <div className="col-right-wd text-align-right">₹2400.00</div>
          </div>
          <button className="dark-primary-bg-color white-color auth-btn wd-100-pc">
            Place Order
          </button>
        </div>
      </div>)}
    </>
  );
};
