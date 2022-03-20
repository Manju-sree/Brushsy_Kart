import '../../styles/products.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {FaStar, FaHeart} from 'react-icons/fa';

export const ProductCard = ({product}) => {
  const {
    id,
    productName,
    price,
    offer,
    rating,
    inStock,
    fastDelivery,
    ratingbymembers,
    isOffer,
    isArrivedNew,
    image,
    categoryName,
  } = product;

  return (
    <div className="card-vertical pos-rel card-container flex-items display-flex-column card-vertical-shadow">
      <div className="image-container badge-container pos-rel ">
        <img
          src={image}
          alt="product-image"
          className="img-responsive card-img"
        />

        {isOffer && <span className="badge-on-card ">OFFER</span>}
        {isArrivedNew && <span className="badge-on-card ">NEW</span>}
      </div>
      <div className={`${inStock ? '' : 'text-overlay'}`}>
        <div
          className={`${inStock ? ' ' : 'text-overlay-size dark-primary-color'}`}
        >{`${inStock ? ' ' : 'Out of stock'}`}</div>
      </div>

      <div className="card-text-container pos-rel flex-grow display-flex-column">
        <div className="text-container-title">
          <h6
            className={`${inStock ? 'product-title pos-rel' : 'product-title disable-font pos-rel'}`}
          >
            {productName}
            <button className="like-btn link-no-style">
              <span>
                <FaHeart className="wish-icon" />
              </span>
            </button>
          </h6>
        </div>
        <div className="text-container-desc  flex-grow display-flex-column">
          <span className=" text-price-lighter">
            {' '}
            Rs.{price}
            <small className="discount-txt"> {offer}</small>
          </span>
          <pre className="rating-text">
            {rating}
            <FaStar className="rating" /> |{ratingbymembers}
          </pre>
        </div>
        <div className="CTA-container">
          {!inStock
            ? <button className="btn-outline btn-disabled  wd-100-pc mr-bt ">
                <Link to="#" className="link-no-style">
                  Out of Stock
                </Link>
              </button>
            : <button className="btn-outline btn-on-hover wd-100-pc mr-bt ">
                <Link to="/Cart" className="link-no-style">
                  Add to Cart
                </Link>
              </button>}

          <button className="btn-outline btn-on-hover wd-100-pc mr-bt  ">
            <Link to="/Cart" className="link-no-style">
              Add to Wishlist
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
