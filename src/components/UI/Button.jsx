import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, onClick, style }) => {
  return (
    <button className={styles.btn} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
