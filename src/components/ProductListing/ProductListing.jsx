import React from "react";
import { useProducts } from "context";
import styles from "./ProductListing.module.css";
import { Search } from "constants";
import { priceSorters } from "constants";
import { ProductCard } from "components";

const ProductListing = () => {
  const { loading, productsListed } = useProducts();
  return (
    <>
      <div className={styles.product_listing_container}>
        <div className={styles.product_list_intro}>
          <h3>SHOES</h3>
          <div
            className={`container-flex-align-center ${styles.product_list_intro_right_part}`}
          >
            <Search size={25} />
            <select name="price-sort" id="">
              <option value="">SORT BY</option>
              {priceSorters.map((everySort) => {
                const { uid, sortingMethod } = everySort;
                return <option key={uid}>{sortingMethod}</option>;
              })}
            </select>
          </div>
        </div>
        <div className={styles.product_list_showcase}>
          {loading ? (
            <h4>LOADING....</h4>
          ) : (
            productsListed.map((everyProduct) => {
              return <ProductCard key={everyProduct.id} {...everyProduct} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export { ProductListing };
