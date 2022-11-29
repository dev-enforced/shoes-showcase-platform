import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div
      className={`container-flex-column container-flex-center ${styles.home_page_wrapper}`}
    >
      <div className={styles.intro_text_container}>
        <h1>KICKSUP</h1>
        <h3>Shoes Showcase Platform</h3>
      </div>
    </div>
  );
};
export { Home };
