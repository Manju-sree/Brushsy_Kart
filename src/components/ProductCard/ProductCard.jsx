import React from "react";
import "../../styles/products.css";
import { useEffect,useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaStar, FaHeart,} from "react-icons/fa";
import {products} from "../../backend/db/products";


export const ProductCard=()=>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        (async () => {
            try {
              const { data } = await axios.get("/api/products");
              setData(data.products);
             console.log(data);
            } catch (error) {
              console.log(error);
            }
          })();
},[])
    return(
    <div className="filter-grid-right">
        {data.map((item)=>{
            return(<>
        
            
             <div className="card-vertical pos-rel card-container flex-items display-flex-column card-vertical-shadow">
                <div className="image-container badge-container pos-rel ">
                    <img src={item.image} alt="product-image" className="img-responsive card-img"/>
                        
                        {item.isOffer && (
                    <span className="badge-on-card ">OFFER</span>
                  )}
                     {item.isArrivedNew && (
                    <span className="badge-on-card ">NEW</span>
                  )}
                </div>
                <div className={`${item.inStock?"":"text-overlay"}`}>
                    <div className={`${item.inStock?" ":"text-overlay-size dark-primary-color"}`}>{`${item.inStock?" ":"Out of stock"}`}</div>
                </div>
               
                <div className="card-text-container pos-rel flex-grow display-flex-column">
                    <div className="text-container-title">
                        <h6 className={`${item.inStock?"product-title pos-rel":"product-title disable-font pos-rel"}`}>{item.productName}
                            <button className="like-btn link-no-style">
                                <span><FaHeart className="wish-icon"/></span>
                            </button>
                        </h6>

                    </div>
                    <div className="text-container-desc  flex-grow display-flex-column">
                        <span className=" text-price-lighter"> Rs.{item.price}
                            <small className="discount-txt">  {item.offer}</small>
                        </span>
                        <pre className="rating-text">{item.rating}<FaStar className="rating"/> |{item.ratingbymembers}
                        </pre>
                    </div>
                    <div className="CTA-container">
                        
                        {!item.inStock? (<button className="btn-outline btn-disabled  wd-100-pc mr-bt ">
                            <Link to="#" className="link-no-style">Out of Stock</Link>
                        </button>):(<button className="btn-outline btn-on-hover wd-100-pc mr-bt ">
                            <Link to="/Cart" className="link-no-style">Add to Cart</Link>
                        </button>)}
                        
                        <button className="btn-outline btn-on-hover wd-100-pc mr-bt  ">
                            <Link to="/Cart" className="link-no-style">Add to Wishlist</Link>
                        </button>
                    </div>
                </div>
            </div> 
            </>);
        })}
        </div>);
}
