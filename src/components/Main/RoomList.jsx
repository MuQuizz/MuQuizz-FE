import React from "react";
import styles from "./RoomList.module.scss";

const RoomList = ({ data, handleDescriptionData }) => {
  // 방번호 방제 status(색깔) 정원

  const handleRoomClick = (room) => {
    // 클릭할때 descriptionData를 바꿔줄것임
    handleDescriptionData(room);
  };

  const rooms = data.map((room) => {
    const roomStatus =
      room.status === "ready" ? (
        <p style={{ color: "green" }}>준비 중</p>
      ) : (
        <p style={{ color: "red" }}>게임 중</p>
      );
    return (
      <li
        key={room.roomId}
        className={styles.room}
        data={room}
        onClick={() => {
          handleRoomClick(room);
        }}
      >
        <p>{room.roomId}</p>
        <h1>{room.roomName}</h1>
        {roomStatus}
        <p>{`${room.currNumOfPeople}/${room.maxNumOfPeople}`}</p>
      </li>
    );
  });

  return (
    <ul className={styles.rooms}>
      <li>
        <p>Room No.</p>
        <h1>방 제목</h1>
        <p>방 상태</p>
        <p>정원</p>
      </li>
      {rooms}
    </ul>
  );
};

export default RoomList;
