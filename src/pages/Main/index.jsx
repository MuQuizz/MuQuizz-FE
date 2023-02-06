import React, { useState } from "react";
import styles from "./Main.module.scss";
import MainContainer from "../../components/UI/MainContainer";
import Description from "../../components/Main/Description";
import RoomList from "../../components/Main/RoomList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeModalStatus } from "../../store/modalSlice";
import CreateRoom from "../../components/Main/CreateRoom";

const Main = () => {
  const [descriptionData, setDescriptionData] = useState({
    roomId: "",
    status: "",
    roomName: "",
    maxNumOfPeople: "",
    currNumOfPeople: "",
  });
  // 여기서 데이터를 받아와서 props로 내려줄거임
  // 예시 목업데이터
  // 이 데이터는 description data로 뽑아내야함
  // 모든데이터들을 받아와서 그중 선택된것을 descriptionData에 넣자.
  // 방목록들 같은 경우는 실시간 동기화가 필요함.
  // 따라서 react query를 사용해보자

  // usemutation과 연계하여 알아서 잘 fetch함.
  const fetchResultData = useQuery(["rooms"], () =>
    axios.get("http://127.0.0.1:8080/room/list").then((data) => {
      return data.data;
    })
  );

  const resultData = fetchResultData.data;

  console.log(resultData);

  const modal = useSelector((state) => {
    return state.modal.modal;
  });

  // 현재 클릭한 방에 따라서 descriptionData가 바뀌어야함. 이건 state로 하자.

  const dispatch = useDispatch();

  const handleDescriptionData = (data) => {
    setDescriptionData(data);
  };

  const modalHandler = () => {
    dispatch(changeModalStatus());
  };

  return (
    <section className={styles.mainPage}>
      {modal && <CreateRoom />}
      <MainContainer width="50" height="70">
        <RoomList
          data={resultData}
          handleDescriptionData={handleDescriptionData}
        />
      </MainContainer>
      <div className={styles.rightContainer}>
        <MainContainer width="100" height="50">
          <Description data={descriptionData} />
        </MainContainer>
        <button onClick={modalHandler}>방 생성</button>
      </div>
    </section>
  );
};

export default Main;
