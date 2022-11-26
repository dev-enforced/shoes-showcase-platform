import { contactDetails } from "constants";
import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={`container-flex-center ${styles.contact_page_wrapper}`}>
        <div
          className={`container-flex-column container-flex-center ${styles.contact_page_content}`}
        >
          <div
            className={`container-flex-column container-flex-center ${styles.contact_card}`}
          >
            <p className={`${styles.contact_card_title}`}>REACH OUT AT</p>
            <div
              className={`container-flex-column ${styles.contact_details_container}`}
            >
              {contactDetails.map(({ uid, emailAddress, designator }) => {
                return (
                  <div key={uid}>
                    <p className={styles.email_style}>{emailAddress}</p>
                    <p className={styles.designator}>{designator}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={`container-flex-column container-flex-center ${styles.social_handles_container}`}
          >
            <div>
              <p>Stay in Touch</p>
            </div>
            <div className={`container-flex ${styles.social_handles}`}>
              <img
                className={styles.individual_social_handle}
                src="/assets/twitter.png"
                alt="Twitter"
              />
              <img
                className={styles.individual_social_handle}
                src="/assets/insta.png"
                alt="Instagram"
              />
              <img
                className={styles.individual_social_handle}
                src="/assets/facebook.png"
                alt="facebook"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Contact };
