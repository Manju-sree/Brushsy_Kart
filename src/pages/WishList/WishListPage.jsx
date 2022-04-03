import '../../styles/main.css';
import React from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, WishListCard } from "../../components/index";
import { useCartAndWishList } from "../../context/index";


export const WishList = () => {
  const { wishListState, wishListDispatch } = useCartAndWishList();
  const { wishListItem, wishListCount } = wishListState;
  return (
    <>
      <h1 className="wishlist-title">
        My Wishlist
        <span className="wishlist-subtitle">({wishListCount}-items)</span>
      </h1>
      <div className="wishlist-card-container">
        {wishListItem.length === 0 ? (
          <Link to="/WishList">
            <ErrorMessage message={"Your wishlist ❤ is currently empty"} />
            <Link to="/Products" className="btn mr-t-lt">Shop Now</Link>
          </Link>
        ) : (
          wishListItem.map((product) => {
            return <WishListCard product={product} key={product._id} />;
          })
        )}
      </div>
    </>
  );
};
