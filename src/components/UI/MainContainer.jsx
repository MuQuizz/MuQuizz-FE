import React from "react";
import styles from "./MainContainer.module.scss";

const MainContainer = ({ children, width, height }) => {
  return (
    <article
      className={styles.container}
      style={{ width: `${width}%`, height: `${height}vh` }}
    >
      {children}
    </article>
  );
};

export default MainContainer;
