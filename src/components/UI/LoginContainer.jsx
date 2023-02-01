import React from "react";
import styles from "./LoginContainer.module.scss";

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
