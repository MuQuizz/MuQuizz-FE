import React from "react";
import styles from "./Main.module.scss";
import MainContainer from "../../components/UI/MainContainer";
import Description from "../../components/Main/Description";
import RoomList from "../../components/Main/RoomList";
import { useQuery } from "@tanstack/react-query";

const Main = () => {
  // 여기서 데이터를 받아와서 props로 내려줄거임
  // 예시 목업데이터
  // 이 데이터는 description data로 뽑아내야함
  // 모든데이터들을 받아와서 그중 선택된것을 descriptionData에 넣자.
  // 방목록들 같은 경우는 실시간 동기화가 필요함.
  // 따라서 react query를 사용해보자

  const resultData = [
    {
      roomId: 1,
      status: "ready",
      roomName: "노쳐맞 할사람 모두 모여라~",
      maxNumOfPeople: 8,
      currNumOfPeople: 1,
    },
    {
      roomId: 2,
      status: "ready",
      roomName: "초보만 오세요 초보만",
      maxNumOfPeople: 8,
      currNumOfPeople: 1,
    },
    {
      roomId: 3,
      status: "ready",
      roomName: "개 초보요",
      maxNumOfPeople: 8,
      currNumOfPeople: 1,
    },
  ];

  const descriptionData = {
    roomId: 1,
    status: "ready",
    roomName: "노쳐맞 할사람 모두 모여라~",
    maxNumOfPeople: 8,
    currNumOfPeople: 1,
  };

  return (
    <section className={styles.mainPage}>
      <MainContainer width="50" height="70">
        <RoomList data={resultData} />
      </MainContainer>
      <div className={styles.rightContainer}>
        <MainContainer width="100" height="50">
          <Description data={descriptionData} />
        </MainContainer>
        <button>방 생성</button>
      </div>
    </section>
  );
};

export default Main;
