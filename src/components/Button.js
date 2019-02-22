import React from "react";
import styles from "./button-styles.css";

export const Primary = () => (
  <button
    style={{
      backgroundColor: "green",
      color: "blue"
    }}
  >
    PRIMARY
  </button>
);

export const Clicked = () => (
  <button className={styles.clicked}>CLICKED</button>
);
