import React from "react";
import styles from "./Store.module.css";
import { CartListing, FilterSidebar, ProductListing } from "components";

const Store = () => {
  return (
    <>
      <div className={`${styles.store_wrapper}`}>
        <div className={styles.store_content_container}>
          <FilterSidebar />
          <ProductListing />
          <div className={styles.cart_container}>
            <CartListing />
          </div>
        </div>
      </div>
    </>
  );
};

export { Store };
