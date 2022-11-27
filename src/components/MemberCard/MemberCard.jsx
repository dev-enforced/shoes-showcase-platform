import React from "react";
import { Linkedin, Facebook, Medium, Behance, Dribble } from "constants";
import styles from "./MemberCard.module.css";

const MemberCard = ({
  uid,
  memberName,
  memberResponsibilities,
  socialMediaHandles,
  memberPic,
}) => {
  const socialMediaHandlesIcons = socialMediaHandles.map((everyHandle) => {
    const { name } = everyHandle;
    if (name === "Facebook") {
      return { ...everyHandle, icon: <Facebook /> };
    } else if (name === "Medium") {
      return {
        ...everyHandle,
        icon: <Medium />,
      };
    } else if (name === "Behance") {
      return {
        ...everyHandle,
        icon: <Behance />,
      };
    } else if (name === "Dribble") {
      return {
        ...everyHandle,
        icon: <Dribble />,
      };
    } else if (name === "Linkedin") {
      return {
        ...everyHandle,
        icon: <Linkedin />,
      };
    } else {
      return { ...everyHandle };
    }
  });
  return (
    <>
      <div
        className={`container-flex-column ${styles.member_card_container}`}
        key={uid}
      >
        <div className={styles.member_card_image_container}>
          <img
            src={memberPic}
            alt={memberName}
            className={styles.member_card_image}
          />
        </div>
        <div
          className={`container-flex-column ${styles.member_card_details_container}`}
        >
          <div
            className={`container-flex-column ${styles.member_card_name_responsibility}`}
          >
            <p>{memberName}</p>
            <p>{memberResponsibilities}</p>
          </div>
          <div className={`container-flex-center`}>
            {socialMediaHandlesIcons.map(({ uid, name, icon }) => {
              return (
                <span key={uid} className={styles.social_media_handle}>
                  {icon}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export { MemberCard };
