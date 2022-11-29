import React from "react";
import { useProducts } from "context";
import { Cart, Navigate, Scheduler } from "constants";
import { CartItem } from "components";
import styles from "./CartListing.module.css";

const CartListing = () => {
  const { cart } = useProducts();
  return (
    <>
      <div className={`container-flex-column ${styles.cart_content_container}`}>
        <div
          className={`container-flex-align-center ${styles.cart_content_header}`}
        >
          <h3> Cart {`(${cart.length})`}</h3>
          <Cart size={25} className={`cursor-pointer`} />
        </div>
        <div className={`container-flex-column ${styles.cart_details}`}>
          {cart.length === 0 ? (
            <div className={styles.empty_cart_info_container}>
              <p>What's stopping you, designer?</p>
            </div>
          ) : (
            cart.map((everyCartItem) => {
              return (
                <CartItem
                  key={everyCartItem?.id}
                  everyCartItem={everyCartItem}
                />
              );
            })
          )}
        </div>
        <div className={styles.cart_other_actions_container}>
          <div className={`container-flex ${styles.cart_other_actions}`}>
            <p className={`cursor-pointer container-flex-center`}>
              <Navigate className={`cursor-pointer`} />
              Home
            </p>
            <p className={`cursor-pointer container-flex-center`}>
              <Scheduler className={`cursor-pointer`} />
              Select Date
            </p>
          </div>
          <button className={styles.place_order_button}>ORDER NOW</button>
        </div>
      </div>
    </>
  );
};
export { CartListing };
