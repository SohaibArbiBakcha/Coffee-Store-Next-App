import React from "react";
import styles from "./banner.module.css";
const Banner = ({ buttonText, handleOnClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>{" "}
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subtitle}>Descover your local coffes shops!</p>
      <button
        className={styles.button}
        onClick={() => {
          console.log("You click me UwU");
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Banner;
