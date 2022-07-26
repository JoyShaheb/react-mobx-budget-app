import React from "react";
import portrait from "../../images/portrait.png";
import TodayDate from "../TodayDate";
import styles from "./TopBar.module.scss";

const Topbar = () => {
  return (
    <div id="topBar" className={`${styles.topBar} px-4 pt-4`}>
      <img className={styles.topBar__image} src={portrait} alt="" />
      <div className={styles.topBar__text}>
        <div className={`${styles.topBar__text__date} fw-light`}>
          <TodayDate />
        </div>
        <div className={`${styles.topBar__text__name} fw-semibold fs-5`}>
          Jane Anderson
        </div>
      </div>
    </div>
  );
};

export default Topbar;
