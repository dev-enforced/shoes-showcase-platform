import React from "react";
import { useNavigate } from "react-router-dom";
import { generateRatings } from "utilities";
import styles from "./ProductCard.module.css";

const ProductCard = ({
  id,
  ratings,
  short_name,
  long_name,
  product_picUrl,
  price,
}) => {
  const redirect = useNavigate();
  const starsToBeShown = generateRatings(ratings);
  return (
    <div className={`cursor-pointer`}>
      <div className={styles.product_image_container}>
        <img src={product_picUrl} alt={long_name} />
      </div>
      <div className={`${styles.product_details_container}`}>
        <div className={`${styles.product_name_container}`}>
          <h4>{short_name}</h4>
        </div>
        <div className={`${styles.product_price_ratings_container}`}>
          <p>Rs. {price}</p>
          <div>{starsToBeShown}</div>
        </div>
      </div>
    </div>
  );
};
export { ProductCard };
