import { chapterDetails } from "constants";
import React from "react";
import styles from "./Journey.module.css";

const Journey = () => {
  return (
    <div
      className={`container-flex-column container-flex-center ${styles.journey_wrapper}`}
    >
      <div
        className={`container-flex-column ${styles.journey_content_container}`}
      >
        <div className={`container-flex-center ${styles.imgDiv}`}>
          <h1 className={styles.imgText}>THE JOURNEY</h1>
        </div>
        <div className={`container-flex-column ${styles.textDiv}`}>
          {chapterDetails.map(({ uid, chapterTitle, chapterContent }) => {
            return (
              <div
                key={uid}
                className={`container-flex-column ${styles.chapter_details_container}`}
              >
                <h3 className={styles.chapter_title}>{chapterTitle}</h3>
                <p>{chapterContent}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Journey };
