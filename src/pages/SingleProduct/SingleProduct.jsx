import React from "react";
import { CartListing, DetailledProductInfo } from "components";
import { useParams } from "react-router-dom";
import styles from "./SingleProduct.module.css";
import { useProducts } from "context";

const SingleProduct = () => {
  const { productId } = useParams();
  const { productsListed } = useProducts();
  const productToBeDisplayed = productsListed.find(
    (everyProduct) => everyProduct.id === productId
  );
  return (
    <>
      <div className={`container-flex-column ${styles.single_product_wrapper}`}>
        <div className={styles.single_product_content_wrapper}>
          {productToBeDisplayed ? (
            <DetailledProductInfo productToBeDisplayed={productToBeDisplayed} />
          ) : (
            <div>
              <p>LOADING...</p>
            </div>
          )}
          <CartListing />
        </div>
      </div>
    </>
  );
};

export { SingleProduct };
