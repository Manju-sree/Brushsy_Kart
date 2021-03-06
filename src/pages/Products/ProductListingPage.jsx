import { FilterSideBar, ProductCard,NavBarTop} from "../../components/index";
import { useFilter } from "../../context/FilterContext/FilterProvider";

export const Products = () => {

  const {productList} = useFilter();
  return (
    <>
      <NavBarTop/>
      <div className="filter-container">
        <FilterSideBar />
        <div className="filter-grid-right">
        {productList.map((prod)=><ProductCard key={prod._id} product={prod}/>)}
        </div>
      </div>
    </>
  );
};
