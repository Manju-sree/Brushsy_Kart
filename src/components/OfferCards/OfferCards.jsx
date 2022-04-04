import "../../styles/main.css";

export const OfferCards = () => {
    return (<>{/* <!-- offers --> */}
<div className="categories">
<div className="small-container">
    <div className="row-container">
        <div className="container-col-3">
            {/* <!-- card with overlay--> */}
            <div className="card-vertical pos-rel card-container flex-items display-flex-column card-vertical-shadow">
                <div className="image-container badge-container pos-rel ">
                    <img src="/assets/images/products/pow5.png" alt="product-image" className="img-responsive card-img" />
                </div>
                <div className="text-overlay">
                    <div className="text-overlay-size dark-primary-color">25% off</div>
                </div>
                <div className="card-text-container pos-rel flex-grow display-flex-column">
                    <div className="text-container-title">
                        <h6 className="product-title disable-font pos-rel">Foundation Makeup Brushes
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-col-3">
            <div className="card-vertical pos-rel card-container flex-items display-flex-column card-vertical-shadow">
                <div className="image-container badge-container pos-rel ">
                    <img src="/assets/images/products/eye1.png" alt="product-image" className="img-responsive card-img" />
                </div>
                <div className="text-overlay">
                    <div className="text-overlay-size dark-primary-color">50% off</div>
                </div>
                <div className="card-text-container pos-rel flex-grow display-flex-column">
                    <div className="text-container-title">
                        <h6 className="product-title disable-font pos-rel">EyeLiner Makeup Brushes
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-col-3">
            <div className="card-vertical pos-rel card-container flex-items display-flex-column card-vertical-shadow">
                <div className="image-container badge-container pos-rel ">
                    <img src="/assets/images/products/pow3.png" alt="blushbrush" className="img-responsive card-img" />
                </div>
                <div className="text-overlay">
                    <div className="text-overlay-size dark-primary-color">15% off</div>
                </div>
                <div className="card-text-container pos-rel flex-grow display-flex-column">
                    <div className="text-container-title">
                        <h6 className="product-title disable-font pos-rel">Blush Makeup Brushes
                        </h6>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</div>
    </>);
}