import "../../styles/products.css";
export const FilterBar = () => {
    const categories = ["Foundation-brushes", "Eyeliner-brushes", "Concealer-brushes", "Blush-brushes"]
    return (<>

        <div className="filter-grid-left">
            <div className="position-fixed filter-space-around">
                <div className="filter-titles">
                    <button className="filter-btn link-no-style">FILTERS</button>
                    <button className="clear-all-btn clear-link-deco link-no-style">CLEAR ALL</button>
                </div>
                <ul className="filter-section">
                    <div className="filter-divider"></div>
                    <li className="filter-subtitle">Price</li>
                    <li><input type="range" min="1" max="100" value="50" className="range-color" /></li>
                    <div className="filter-divider"></div>
                    <li className="filter-subtitle">Sort by</li>
                    <li><label for="radio-button" className="form-label">
                        <input type="radio" name="sort" className="form-checkbox-field" value="LOW_TO_HIGH_PRICE" />
                        Price - Low to High
                    </label>
                    </li>
                    <li><label for="radio-button" className="form-label">
                        <input type="radio" className="form-checkbox-field" name="sort" value="HIGH_TO_LOW_PRICE" />
                        Price - High to low
                    </label>
                    </li>
                    <div className="filter-divider"></div>
                    <li className="filter-subtitle">Category</li>
                    {categories.map(categoryName => <li><label className="form-label">
                        <input type="checkbox" className="form-checkbox-field" />
                        {categoryName}
                    </label></li>)}
                    <div className="filter-divider"></div>
                    <li className="filter-subtitle">Ratings</li>
                    {[4, 3, 2, 1].map(num => <li><label for="radio-button" className="form-label">
                        <input type="radio" className="form-checkbox-field" name="sort" />
                        {num} Stars & above
                    </label></li>)}
                </ul>
            </div>
        </div></>)
}
