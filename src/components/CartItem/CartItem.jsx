import { Delete } from "constants";
import { useProducts } from "context";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CartItem.module.css";

const CartItem = ({ everyCartItem }) => {
  const { removeExistingItemFromCart } = useProducts();
  const { id, short_name, long_name, product_picUrl, price } = everyCartItem;
  const redirect = useNavigate();
  return (
    <>
      <div
        className={`container-flex cursor-pointer ${styles.cart_item_container}`}
        onClick={() => {
          redirect(`/store/${id}`);
        }}
      >
        <div className={styles.cart_img_container}>
          <img src={product_picUrl} alt={long_name} />
        </div>
        <div>
          <h4>{short_name}</h4>
          <p>By Kicksup and You</p>
        </div>
        <div>
          <h4>Rs. {price}</h4>
        </div>
        <div
          className={`cursor-pointer ${styles.remove_item_btn}`}
          onClick={() => {
            removeExistingItemFromCart(everyCartItem);
          }}
        >
          <Delete color="red" size={20}/>
        </div>
      </div>
    </>
  );
};
export { CartItem };
