import React from "react";
import styles from "./Description.module.scss";
import MusicBar from "../UI/MusicBar";

const Description = ({ data }) => {
  const status = data.status === "ready" ? "준비 중" : "게임 중";
  return (
    <div className={styles.container}>
      <p>{`${data.roomId}번 방`}</p>
      <h1>{data.roomName}</h1>
      <MusicBar />
      <div className={styles.description}>
        <p>{`정원: 1/${data.maxNumOfPeople}`}</p>
        <p>{`상태: ${status}`}</p>
      </div>
    </div>
  );
};

export default Description;
