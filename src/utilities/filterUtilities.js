import { actionConstants } from "constants";
const { HIGH_TO_LOW, LOW_TO_HIGH } = actionConstants;
const sortProductsAccordingToPrice = (stateGiven, productsList) => {
  const { price_sort } = stateGiven;
  if (price_sort === LOW_TO_HIGH) {
    return [...productsList].sort(
      (firstProduct, secondProduct) =>
        Number(firstProduct.price) - Number(secondProduct.price)
    );
  } else if (price_sort === HIGH_TO_LOW) {
    return [...productsList].sort(
      (firstProduct, secondProduct) =>
        Number(secondProduct.price) - Number(firstProduct.price)
    );
  } else {
    return [...productsList];
  }
};

const filterProductsAccordingToProductType = (stateGiven, productsList) => {
  const { product_type } = stateGiven;
  if (
    Object.keys(product_type).length === 0 ||
    Object.keys(product_type).every(
      (everyType) => product_type[everyType] === false
    )
  ) {
    return [...productsList];
  } else {
    return [...productsList].filter(
      (everyProduct) => product_type[everyProduct.product_type]
    );
  }
};

const filterProductsAccordingToPriceRange = (stateGiven, productsList) => {
  const { price_filter } = stateGiven;
  const price_filter_modified = price_filter.filter(
    (everyPriceFilter) => everyPriceFilter.flag
  );
  if (
    price_filter.length === 0 ||
    price_filter.every((everyPriceFilter) => everyPriceFilter.flag === false)
  ) {
    return [...productsList];
  } else {
    return [...productsList].filter((everyProduct) => {
      const verifiedArray = price_filter_modified.map(
        ({ min_price, max_price }) =>
          min_price < everyProduct.price && max_price > everyProduct.price
            ? true
            : false
      );
      return verifiedArray.includes(true) ? true : false;
    });
  }
};

const cumulativeFiltersAndSorts =
  (...participatingFunctions) =>
  (stateProvided, productsGiven) =>
    participatingFunctions.reduce((result, currentFunction) => {
      return currentFunction(stateProvided, result);
    }, productsGiven);

export {
  sortProductsAccordingToPrice,
  filterProductsAccordingToProductType,
  filterProductsAccordingToPriceRange,
  cumulativeFiltersAndSorts
};
