import "../../styles/main.css";
import React from "react";


export const Brands = () => {   
    return (
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
);
        }