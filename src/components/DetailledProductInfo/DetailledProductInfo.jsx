import React from "react";
import { useNavigate } from "react-router-dom";
import { GoBack } from "constants";
import { generateRatings } from "utilities";
import styles from "./DetailledProductInfo.module.css";
import { routeConstants, shoeEdgeEnds } from "constants";
import { useProducts } from "context";

const DetailledProductInfo = ({ productToBeDisplayed }) => {
  const { short_name, long_name, ratings, product_picUrl, price } =
    productToBeDisplayed;
  const starsToBeShown = generateRatings(ratings);
  const customisedRating = generateRatings(0);
  const redirect = useNavigate();

  const { STORE_ROUTE } = routeConstants;
  const {
    cart,
    checkItemExistsInCartOrNot,
    addNewItemToCart,
    removeExistingItemFromCart,
  } = useProducts();

  return (
    <>
      <div className={styles.detailled_product_info_container}>
        <div
          className={`container-flex-align-center ${styles.redirect_to_store}`}
          onClick={() => {
            redirect(STORE_ROUTE);
          }}
        >
          <GoBack size={25} /> your design space
        </div>
        <div className={styles.detailled_product_info_content_container}>
          <div className={styles.detailled_product_info_content_left}>
            <div className={styles.product_visual_overview}>
              <div className={styles.product_enlarged_img_container}>
                <div>
                  <img src={product_picUrl} alt={short_name} />
                </div>
              </div>
              <div
                className={`container-flex-column ${styles.product_minified_img_container}`}
              >
                {["element1", "element2", "element3"].map((everyElement) => {
                  return (
                    <div key={everyElement}>
                      <img src={product_picUrl} alt={short_name} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={`container-flex-align-center ${styles.product_rate_custom}`}
            >
              Rate stars {customisedRating}
            </div>
          </div>
          <div
            className={`container-flex-column ${styles.detailled_product_info_content_right}`}
          >
            <div>
              <h2>{long_name}</h2>
              <p>By Kicksup</p>
            </div>
            <div>
              {starsToBeShown}
              <p>34 Reviews</p>
            </div>
            <div>
              <p> Rs. {price}</p>
              <p className={styles.dull_text}>
                Get an exclusive 20% off using credit bank card
              </p>
            </div>
            <div>
              {shoeEdgeEnds.map(({ uid, endDetails }) => {
                return (
                  <div key={uid} className={styles.choice_container}>
                    <h3>{endDetails}</h3>
                    <div className={styles.choice_details_container}>
                      <div
                        className={`${styles.individual_choice_container} ${
                          endDetails === "Sole" ? `${styles.black_choice}` : ""
                        }`}
                      >
                        <img src="/assets/black-check.png" alt="" />
                      </div>
                      <div
                        className={`${styles.individual_choice_container} ${styles.blue_choice}`}
                      ></div>
                      <div
                        className={`${styles.individual_choice_container} ${
                          endDetails === "Sole" ? `${styles.white_choice}` : ""
                        }`}
                      >
                        <img src="/assets/blue-check.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className={styles.choice_container}>
                <h3>Size</h3>
                <div className={styles.choice_details_container}>
                  {[7, 8, 9, 10].map((everyOption) => {
                    return (
                      <div
                        key={everyOption}
                        className={`${styles.individual_choice_container} ${styles.white_choice}`}
                      >
                        {everyOption}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product_actions}>
          <button className={styles.share_design}>SHARE DESIGN</button>
          <button
            onClick={() => {
              checkItemExistsInCartOrNot(cart, productToBeDisplayed)
                ? removeExistingItemFromCart(productToBeDisplayed)
                : addNewItemToCart(productToBeDisplayed);
            }}
            className={styles.add_to_cart_btn}
          >
            {checkItemExistsInCartOrNot(cart, productToBeDisplayed)
              ? "REMOVE FROM CART"
              : "ADD TO CART"}
          </button>
        </div>
      </div>
    </>
  );
};

export { DetailledProductInfo };
