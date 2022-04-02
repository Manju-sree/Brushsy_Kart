import "../../styles/main.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const FeaturedCard = () => {
    return (<>{/* <!-- featured products--> */}
        <div className="small-container">
            <h2 className="feat-title">Featured Products</h2>
            <div className="row-container">
                <div className="container-col-4">
                    <img src="/assets/images/products/eye2.png" alt="eye2" />
                    <h4>PAC Eyeliner Brush</h4>
                    <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div>
                <div className="container-col-4">
                    <img src="/assets/images/products/found4.png" alt="found4" />
                    <h4>ColorBar Foundation Brush</h4>
                    <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div>
                <div className="container-col-4">
                    <img src="/assets/images/products/concea2.png" alt="concea2" />
                    <h4>Miniso Concealer Brush</h4>
                    <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div>
                <div className="container-col-4">
                    <img src="/assets/images/products/blush4.png" alt="blush4" />
                    <h4>Sugar Blush MakeUp Brush</h4>
                    <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                </div>
            </div>
        </div>
           </>);
        }