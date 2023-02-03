import React from "react";
import styles from "./Description.module.scss";
import MusicBar from "../UI/MusicBar";

const Description = ({ data }) => {
  const status =
    data.status === "ready" ? (
      <p style={{ color: "green" }}>준비 중</p>
    ) : (
      <p style={{ color: "red" }}>게임 중</p>
    );
  const descriptionRes =
    data.roomId === "" ? (
      <p className={styles.select}>방을 선택해주세요.</p>
    ) : (
      <div className={styles.container}>
        <p>{`${data.roomId}번 방`}</p>
        <h1>{data.roomName}</h1>
        <MusicBar />
        <div className={styles.description}>
          <p>{`정원: ${data.currNumOfPeople}/${data.maxNumOfPeople}`}</p>
          {status}
        </div>
      </div>
    );
  return descriptionRes;
};

export default Description;
