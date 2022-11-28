import React from "react";
import { Filter, typeFilters, costFilters, colorFilters } from "constants";
import styles from "./FilterSidebar.module.css";
import { actionConstants } from "constants";
import { useProducts } from "context";

const FilterSidebar = () => {
  const {
    currentFilterState: { product_type, price_filter },
    updateFilterState,
  } = useProducts();
  const { PRICE_FILTER, TYPE_FILTER } = actionConstants;
  return (
    <div className={`container-flex-column ${styles.filter_sidebar_container}`}>
      <div className={styles.sidebar_title_header}>
        <h3>Filters</h3>
        <Filter size={25} />
      </div>
      <div className={styles.filter_contents}>
        <h4 className={styles.filter_title}>Cost</h4>
        <div>
          {costFilters.map((everyFilter) => {
            const { uid, labelDetails, min_price, max_price } = everyFilter;
            const priceFilterConsidered = price_filter.find(
              (everyPriceFilter) => everyPriceFilter.name === labelDetails
            );
            return (
              <label
                key={uid}
                htmlFor={labelDetails}
                className={styles.individual_filter}
              >
                <input
                  id={labelDetails}
                  checked={priceFilterConsidered?.flag}
                  onChange={(changeEvent) => {
                    updateFilterState({
                      type: PRICE_FILTER,
                      payload: {
                        price_filter_name: labelDetails,
                        min_price,
                        max_price,
                      },
                    });
                  }}
                  type="checkbox"
                  name="cost-filter"
                />
                {labelDetails}
              </label>
            );
          })}
        </div>
        <h4 className={styles.filter_title}>COLOR</h4>
        <div className={styles.color_box_container}>
          {colorFilters.map(({ uid, colorName, colorDetails }) => {
            return (
              <div
                key={uid}
                className={styles.individual_color_box}
                style={{ backgroundColor: colorDetails }}
              ></div>
            );
          })}
        </div>
        <h4 className={styles.filter_title}>Type</h4>
        <div>
          {typeFilters.map((everyFilter) => {
            const { uid, labelDetails } = everyFilter;
            return (
              <label
                key={uid}
                htmlFor={labelDetails}
                className={styles.individual_filter}
              >
                <input
                  checked={product_type[labelDetails]}
                  onChange={(changeEvent) => {
                    updateFilterState({
                      type: TYPE_FILTER,
                      payload: { product_type_considered: labelDetails },
                    });
                  }}
                  id={labelDetails}
                  type="checkbox"
                  name="type-filter"
                />
                {labelDetails}
              </label>
            );
          })}
        </div>
      </div>
      <div>
        <button
          className={styles.filter_sidebar_btn}
          onClick={() => {
            updateFilterState({ type: actionConstants.CLEAR_ALL_FILTERS });
          }}
        >
          CLEAR FILTERS
        </button>
      </div>
    </div>
  );
};

export { FilterSidebar };
