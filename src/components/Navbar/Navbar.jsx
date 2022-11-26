import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks, User } from "constants";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const getActiveStyles = ({ isActive }) => {
    return isActive && `${styles.highlight}`;
  };
  return (
    <>
      <div className={`container-flex-align-center ${styles.nav_container}`}>
        <div className={`container-flex-center ${styles.logo_container}`}>
          <img
            src="/assets/websitelogo.png"
            alt="Kicksup logo"
            className={`cursor-pointer ${styles.website_logo}`}
          />
        </div>
        <div className={`container-flex-center ${styles.routes_container}`}>
          {navLinks.map(({ uid, text, path }) => {
            return (
              <div className={`${styles.individual_route_container}`} key={uid}>
                <NavLink
                  className={getActiveStyles}
                  style={{ paddingBottom: "5px" }}
                  to={path}
                >
                  {text}
                </NavLink>
              </div>
            );
          })}
        </div>
        <div
          className={`container-flex-center ${styles.profile_container} cursor-pointer`}
        >
          <User size={30} />
          <p>GUEST</p>
        </div>
      </div>
    </>
  );
};
export { Navbar };
