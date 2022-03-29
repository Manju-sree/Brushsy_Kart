import '../../styles/main.css';
import React from "react";

export const PriceCard = ({ cartState }) => {
    const { cartItem,cartCount } = cartState;
    const DeliveryCharges = 50;
    // calculation of total original price
  const totalOriginalPrice = cartItem.reduce(
    (acc, currentItem) => currentItem.qty * currentItem.originalPrice + acc,
    0
  );
  //  calculation of total sellingPrice
  const totalSellingPrice = cartItem.reduce(
    (acc, currentItem) => currentItem.qty * currentItem.sellingPrice + acc,
    0
  );
  // calculation of discount (original-selling)
  const BagDiscount = totalOriginalPrice - totalSellingPrice;

  //  total price
  const GrandTotal = totalSellingPrice + DeliveryCharges;

  return (
  <><div className="price-details-style">PRICE DETAILS</div>
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
  </>);
}