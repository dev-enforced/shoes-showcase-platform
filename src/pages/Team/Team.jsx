import React from "react";
import { teamDetails } from "constants";
import { MemberCard } from "components";
import styles from "./Team.module.css";

const Team = () => {
  return (
    <>
      <div
        className={`container-flex-column container-flex-center ${styles.team_page_wrapper}`}
      >
        <div className={`container-flex-center ${styles.team_page_content}`}>
          <p className={styles.text_highlight}>
            Without bonding and coordination, every project is a failure.
          </p>
          <p className={styles.text_highlight}>
            Look at who makes KICKSUP great. ;&#41;
          </p>
        </div>
        <div
          className={`container-flex-center ${styles.team_members_container}`}
        >
          {teamDetails.map((everyTeamMember) => (
            <MemberCard key={everyTeamMember.uid} {...everyTeamMember} />
          ))}
        </div>
        <div>
          <p className={styles.text_highlight}>and You! ; &#41;</p>
        </div>
      </div>
    </>
  );
};
export { Team };
