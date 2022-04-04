import "../../styles/main.css";
import { useFilter } from "../../context/index";
import React, { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom';
import axios from "axios";
import "../FeaturedCard/FeaturedCard.css";

export const FeaturedCard = () => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const loadCategories = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get("/api/categories");
            setCategory(data.categories);
            setLoading(false)
        } catch (error) {
            console.log("Error:", error)
        }
    }
    useEffect(() => {
        loadCategories();
    }, [])
    const { state, dispatch } = useFilter();
    const navigateToShop = useNavigate();
    return (
        <div className="small-container">
            <h2 className="feat-title">Featured Categories</h2>
            {loading ? (
                    <>
                        <img src="https://c.tenor.com/SLFiTi_nrQ4AAAAC/loader.gif" alt="loading-img" />
                    </>

                ) :
                   
            (<div className="row-container">
                {category.map((eachCategory) => {
                const { _id, categoryName, categoryImage} = eachCategory;
                return (
                <div key={_id} className="container-col-4"
                   onClick={() =>{
                    dispatch({
                      type: "FILTER_CATEGORY",
                      payload: { categoryName },
                    })
                    navigateToShop("/Products");}}>
                    <img src={categoryImage} alt="category-image"/>
                    <h4 className="category-text-style primary-color">{categoryName}</h4>  
                </div> )
                        })}    
            </div>)}
        </div>);
        }