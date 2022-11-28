import { actionConstants } from "constants";

const { PRICE_SORT, PRICE_FILTER, TYPE_FILTER, CLEAR_ALL_FILTERS } =
  actionConstants;

const initialFilterState = {
  price_sort: "none",
  product_type: {},
  price_filter: [],
  color_filter: {
    black: false,
    blue: false,
    cream: false,
    white: false,
  },
};

const filterReducer = (stateGiven, actionExecuted) => {
  const { type, payload } = actionExecuted;
  switch (type) {
    case PRICE_SORT:
      return { ...stateGiven, price_sort: payload };
    case PRICE_FILTER:
      const priceFilterConsidered = stateGiven.price_filter.find(
        (everyPriceFilter) =>
          everyPriceFilter.name === payload.price_filter_name
      );

      if (priceFilterConsidered) {
        const modifiedPriceFilters = stateGiven.price_filter.map(
          (everyPriceFilter) =>
            everyPriceFilter.name === priceFilterConsidered.name
              ? { ...priceFilterConsidered, flag: !priceFilterConsidered.flag }
              : { ...everyPriceFilter }
        );
        return { ...stateGiven, price_filter: modifiedPriceFilters };
      } else {
        return {
          ...stateGiven,
          price_filter: [
            ...stateGiven.price_filter,
            {
              name: payload.price_filter_name,
              min_price: payload.min_price,
              max_price: payload.max_price,
              flag: true,
            },
          ],
        };
      }
    case TYPE_FILTER:
      if (Object.keys(stateGiven.product_type).length === 0) {
        return {
          ...stateGiven,
          product_type: {
            ...stateGiven.product_type,
            [payload.product_type_considered]: true,
          },
        };
      } else {
        return {
          ...stateGiven,
          product_type: {
            ...stateGiven.product_type,
            [payload.product_type_considered]:
              !stateGiven.product_type[payload.product_type_considered],
          },
        };
      }

    case CLEAR_ALL_FILTERS:
      return { ...initialFilterState };
    default:
      throw new Error("Such an action does not exist");
  }
};

export { initialFilterState, filterReducer };
