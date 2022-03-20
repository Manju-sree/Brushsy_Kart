import "../../styles/main.css";
import { useFilter } from "../../context/index";

export const FilterSideBar = () => {
  const { state, dispatch } = useFilter();
  const categories = [
    "Foundation-brushes",
    "Eyeliner-brushes",
    "Concealer-brushes",
    "Blush-brushes",
  ];
  return (
    <>
      <div className="filter-grid-left">
        <div className="position-fixed filter-space-around">
          <div className="filter-titles">
            <button className="filter-btn link-no-style">FILTERS</button>
            <button
              className="clear-all-btn clear-link-deco link-no-style"
              onClick={() => dispatch({ type: "CLEAR_ALL" })}
              type="reset"
            >
              CLEAR ALL
            </button>
          </div>
          <ul className="filter-section">
            <div className="filter-divider"></div>
            <li className="filter-subtitle">Sort by</li>
            <li>
              <label htmlFor="lowToHigh" className="form-label">
                <input
                  type="radio"
                  name="sort"
                  className="form-checkbox-field"
                  value="LOW_TO_HIGH_PRICE"
                  id="lowToHigh"
                  onChange={() =>
                    dispatch({ type: "SORT", payload: "PRICE-LOW-TO-HIGH" })
                  }
                  checked={state.sortBy === "PRICE-LOW-TO-HIGH"}
                />
                Price - Low to High
              </label>
            </li>
            <li>
              <label htmlFor="highToLow" className="form-label">
                <input
                  type="radio"
                  className="form-checkbox-field"
                  name="sort"
                  id="highToLow"
                  value="HIGH_TO_LOW_PRICE"
                  onChange={() =>
                    dispatch({ type: "SORT", payload: "PRICE-HIGH-TO-LOW" })
                  }
                  checked={state.sortBy === "PRICE-HIGH-TO-LOW"}
                />
                Price - High to low
              </label>
            </li>
            <div className="filter-divider"></div>
            <li className="filter-subtitle">Filter by availability</li>
            <li>
              <label className="form-label" htmlFor="outofstock">
                <input
                  type="checkbox"
                  className="form-checkbox-field"
                  name="outofstock"
                  id="outofstock"
                  checked={state.outOfStock}
                  onChange={(e) =>
                    dispatch({
                      type: "OUT-OFF-STOCK",
                      payload: e.target.checked,
                    })
                  }
                />
                Out of Stock
              </label>
            </li>
            <li>
              <label className="form-label" htmlFor="fastdelivery">
                <input
                  type="checkbox"
                  className="form-checkbox-field"
                  name="fastdelivery"
                  id="fastdelivery"
                  checked={state.fastDelivery}
                  onChange={(e) =>
                    dispatch({
                      type: "FAST-DELIVERY",
                      payload: e.target.checked,
                    })
                  }
                />
                Fast Delivery
              </label>
            </li>
            <div className="filter-divider"></div>
            <li className="filter-subtitle">Category</li>
            {categories.map((categoryName) => (
              <li key={categoryName}>
                <label className="form-label">
                  <input
                    type="checkbox"
                    className="form-checkbox-field"
                    checked={state.categoryName}
                    onChange={() =>
                      dispatch({
                        type: "FILTER_CATEGORY",
                        payload: { categoryName },
                      })
                    }
                  />
                  {categoryName}
                </label>
              </li>
            ))}
            <div className="filter-divider"></div>
            <li className="filter-subtitle">Ratings</li>
            {[4, 3, 2, 1].map((num) => (
              <li key={num}>
                <label htmlFor="Stars & above" className="form-label">
                  <input
                    type="radio"
                    className="form-checkbox-field"
                    name="rating"
                    id="Stars & above"
                    onChange={() => {
                      dispatch({
                        type: "FILTER_RATING",
                        payload: { starCount: num },
                      });
                    }}
                  />
                  {num} Stars & above
                </label>
              </li>
            ))}
            <div className="filter-divider"></div>
            <li className="filter-subtitle">Price</li>
            <li>
              <input
                name="slider"
                type="range"
                min="1"
                max="1000"
                step="300"
                className="range-color"
                id="price-range"
                onChange={(e) =>
                  dispatch({
                    type: "FILTER_BY_PRICE",
                    payload: { start: 1, end: Number(e.target.value) },
                  })
                }
              />
              {state.filterByPrice.end}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
