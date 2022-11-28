import React from "react";
import styles from "./Store.module.css";
import { FilterSidebar, ProductListing } from "components";

const Store = () => {
  return (
    <>
      <div className={`${styles.store_wrapper}`}>
        <div className={styles.store_content_container}>
          <FilterSidebar />
          {/* Product Listing Component */}
          <ProductListing />
          {/* Another Div within which cart component is contained */}
        </div>
      </div>
    </>
  );
};

export { Store };
