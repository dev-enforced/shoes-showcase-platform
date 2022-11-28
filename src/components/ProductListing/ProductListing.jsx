import React from "react";
import { useProducts } from "context";
import { Search, priceSorters, actionConstants } from "constants";
import { ProductCard } from "components";
import styles from "./ProductListing.module.css";

const ProductListing = () => {
  const {
    loading,
    modifiedProductsList,
    currentFilterState: { price_sort },
    updateFilterState,
  } = useProducts();
  const { PRICE_SORT } = actionConstants;
  return (
    <>
      <div className={styles.product_listing_container}>
        <div className={styles.product_list_intro}>
          <h3>SHOES</h3>
          <div
            className={`container-flex-align-center ${styles.product_list_intro_right_part}`}
          >
            <Search size={25} />
            <select
              name="price-sort"
              value={price_sort}
              onChange={(changeEvent) => {
                updateFilterState({
                  type: PRICE_SORT,
                  payload: changeEvent.target.value,
                });
              }}
            >
              <option value="none">SORT BY</option>
              {priceSorters.map((everySort) => {
                const { uid, sortingMethod, sortingPayload } = everySort;
                return (
                  <option key={uid} value={sortingPayload}>
                    {sortingMethod}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className={styles.product_list_showcase}>
          {loading ? (
            <h4>LOADING....</h4>
          ) : modifiedProductsList.length !== 0 ? (
            modifiedProductsList.map((everyProduct) => {
              return <ProductCard key={everyProduct.id} {...everyProduct} />;
            })
          ) : (
            <div>NO PRODUCTS FOUND</div>
          )}
        </div>
      </div>
    </>
  );
};

export { ProductListing };
