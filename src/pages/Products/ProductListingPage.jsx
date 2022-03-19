import { FilterBar } from "../../components";
import { NavBarTopWithLogout } from "../../components/NavBarTopWithLogout/NavBarTopWithLogout";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export const Products =()=>{
    return(<>
    {/* <!-- navigation bar --> */}
    <div class="filter-container">
    <NavBarTopWithLogout/>
    <FilterBar/>
    <ProductCard/>
    </div>
    </>);
}
