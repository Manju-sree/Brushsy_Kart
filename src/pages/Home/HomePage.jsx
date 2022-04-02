import "../../styles/main.css";
import { Link } from "react-router-dom";
import { FeaturedCard ,OfferCards} from "../../components/index";

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
        {/* <!-- brands --> */}
        <div className="brands">
            <div className="small-container">
                <h2 className="feat-title">Brands</h2>
                <div className="row-container">
                    <div className="container-col-5">
                        <img src="/assets/images/brand_logos/colorbar.png" alt="colorbar" />
                    </div>
                    <div className="container-col-5">
                        <img src="/assets/images/brand_logos/miniso_brand.png" alt="miniso" />
                    </div>
                    <div className="container-col-5">
                        <img src="/assets/images/brand_logos/sugar_brand.png" alt="sugar" />
                    </div>
                    <div className="container-col-5">
                        <img src="/assets/images/brand_logos/pac_brand.png" alt="pac" />
                    </div>
                    <div className="container-col-5">
                        <img src="/assets/images/brand_logos/mac_brand.png" alt="mac" />
                    </div>
                </div>
            </div>
        </div>

    </>);
}
