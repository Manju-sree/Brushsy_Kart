import "../../styles/main.css";
import { Link } from "react-router-dom";
import { FeaturedCard ,OfferCards,Brands} from "../../components/index";

export const Home = () => {
    return (<>
        {/* <!-- header container --> */}
        <div className="header">
            <div className="container">
                <div className="row-container">
                    <div className="container-col-2">
                        <h1>BEAUTY ACCESSORIES</h1>
                        <p className="gray-color">Brushsy is a beauty store providing quality makeup brushes<br /> at reasonable cost all across India.</p>
                        <Link to="/Products" className="btn">Shop Now</Link>
                    </div>
                    <div className="container-col-2">
                        <img src="/assets/images/heroimg.png" alt="heroimage" />
                    </div>
                </div>
            </div>
        </div>
        <OfferCards/>
        <FeaturedCard/>
        <Brands/>  
    </>);
}
