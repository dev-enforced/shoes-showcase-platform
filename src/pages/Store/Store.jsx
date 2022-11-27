import { FilterSidebar } from "components";
import React from "react";
import styles from "./Store.module.css";

const Store = () => {
  return (
    <>
      <div className={`${styles.store_wrapper}`}>
        <div className={styles.store_content_container}>
          {/* Filters */}
          <FilterSidebar/>
          {/* Product Listing Component */}
          {/* Another Div within which cart component is contained */}
        </div>
      </div>
    </>
  );
};

export { Store };
