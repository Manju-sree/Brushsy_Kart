export const composeFilterFunc = (state, ...functions) => productList =>
  functions.reduce ((acc, curr) => {
    return curr (state, acc);
  }, productList);

//filter sortBy function
export const sortBy = (state, productList) => {
  switch (state.sortBy) {
    case 'PRICE-HIGH-TO-LOW':
      return [...productList].sort (
        (prev, curr) => Number (curr.price) - Number (prev.price)
      );
    case 'PRICE-LOW-TO-HIGH':
      return [...productList].sort (
        (prev, curr) => Number (prev.price) - Number (curr.price)
      );
    default:
      return productList;
  }
};

// outofStock  function
export const outOfStock = (state, productList) => {
  return state.outOfStock
    ? productList.filter (item => !item.inStock)
    : productList;
};
// fastdelivery func
export const fastDelivery = (state, productList) => {
  return state.fastDelivery
    ? [...productList].filter (item => item.fastDelivery)
    : productList;
};
// filter by category func
export const filterCategory = (state, productList) => {
  return Object.keys (state.category).length === 0 ||
    Object.values (state.category).every (v => v === false)
    ? productList
    : productList.filter (({categoryName}) => state.category[categoryName]);
};

// filter by rating func

export const filterRating = (state, productList) => {
  return state.rating === ''
    ? productList
    : productList.filter (({rating}) => rating >= state.rating);
};
//filter by price func
export const filterPrice = (state, productList) => {
  if (state.filterByPrice.end === 1) return productList;
  return productList.filter (
    product =>
      product.price > state.filterByPrice.start &&
      product.price < state.filterByPrice.end
  );
};

