export const initialValues = {
  sortBy: null,
  outOfStock: false,
  fastDelivery: false,
  category: {},
  rating: "",
  filterByPrice: {
    start: 1,
    end: 1000,
  },
};
export const filterReducerFunc = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CLEAR_ALL":
      return initialValues;
    case "SORT":
      return { ...state, sortBy: payload };
    case "OUT-OFF-STOCK":
      return { ...state, outOfStock: payload };
    case "FAST-DELIVERY":
      return { ...state, fastDelivery: payload };
    case "FILTER_CATEGORY":
      if (Object.keys(state.category).length === 0)
        return {
          ...state,
          category: { ...state.category, [payload.categoryName]: true },
        };
      return {
        ...state,
        category: {
          ...state.category,
          [payload.categoryName]: !state.category[payload.categoryName],
        },
      };
    case "FILTER_RATING":
      return { ...state, rating: payload.starCount };
    case "FILTER_BY_PRICE":
      return { ...state, filterByPrice: payload };
    default:
      return state;
  }
};
