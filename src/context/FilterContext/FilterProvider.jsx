import React, { createContext, useContext, useReducer, useState ,useEffect} from "react";
import { filterReducerFunc,initialValues } from "./FilterReducer";
import { composeFilterFunc,sortBy,outOfStock,fastDelivery,filterCategory,filterRating,filterPrice } from "../../utils/FilterUtil";
import axios from "axios";


const FilterContext = createContext([]);
const FilterProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [state, dispatch] = useReducer(filterReducerFunc, initialValues);
    
    useEffect(() => {
        (async () => {
            try {
                const { data: { products } } = await axios.get("/api/products");
                setProductList(products);

            } catch (error) {
                console.error("error");
            }
        })();
    }, []);
    const filterProducts = composeFilterFunc(state,
        sortBy,outOfStock,fastDelivery,
        filterCategory,
        filterRating,
        filterPrice
      )(productList);
    return (
        <FilterContext.Provider value={{ state, dispatch,productList:filterProducts}}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter};
