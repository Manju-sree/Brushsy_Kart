import React from "react";
import { ErrorMessage, HorizontalCard,TotalPriceCard ,NavBarTop} from "../../components/index";
import { Link } from "react-router-dom";
import { useCartAndWishList } from "../../context/index";
import "../../styles/cart.css";



export const Cart = () => {
  const { cartState} = useCartAndWishList();
  const { cartItem } = cartState;
  return (
    <>
      <NavBarTop/>
      <h1 className="wishlist-title">My Cart</h1>
      {cartItem.length === 0 ? (
        <Link to="#">
          <ErrorMessage message={"Your Cart is Empty"} />
          <img src="/assets/images/shop_cart.jpg" alt="empty-cart-image" className="img-responsive cart-img"/>
        </Link>
      ) : (
        <div className="wishlist-card-container">
          <ul className="cart-left-container">
            <li>
              {cartItem && cartItem.map((item) => (
                <HorizontalCard item={item} />
              ))}
            </li>
          </ul>
          <div className="cart-right-container">
          {cartItem.length === 0 ? (
              ""
            ):(
            <TotalPriceCard cartState={cartState}/>)}
          </div>
        </div>
      )}
    </>
  );
};
