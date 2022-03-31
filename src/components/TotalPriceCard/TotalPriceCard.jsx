import "../../styles/main.css";
import React from "react";

export const TotalPriceCard = ({ cartState,price,discount}) => {
    const { cartItem, cartCount } = cartState;

    // calculating total price items
    const totalPriceAmount = cartItem.reduce(
        (acc, currentItem) => currentItem.qty * currentItem.price + acc,
        0
    );

    const discountedPrice = cartItem.reduce(
        (acc, currentItem) =>( currentItem.price * currentItem.discount)/100 *currentItem.qty+acc,
        0
    );

    // Total Amount: calculation
    const totalAmount = totalPriceAmount-discountedPrice;

    return (
        <>
            <div className="price-details-style">PRICE DETAILS</div>
            <hr />
            <div className="bill-details-row">
                <div className="col-left-wd ">Price ({cartCount} items)</div>
                <div className="col-right-wd  text-align-right">
                    ₹{totalPriceAmount}
                </div>
            </div>
            <div className="bill-details-row">
                <div className="col-left-wd ">Discount </div>
                <div className="col-right-wd  text-align-right primary-color">
                ₹{discountedPrice}
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
                <div className="col-right-wd text-align-right">₹{totalAmount}</div>
            </div>
            <button className="dark-primary-bg-color white-color auth-btn wd-100-pc">
                Place Order
            </button>
        </>
    );
};
