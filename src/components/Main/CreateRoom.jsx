import React, { useState } from "react";
import Modal from "../UI/Modal";
import styles from "./CreateRoom.module.scss";
import Button from "../UI/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeModalStatus } from "../../store/modalSlice";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const CreateRoom = () => {
  const [title, setTitle] = useState("");

  const [radio, setRadio] = useState("2");

  const titleInputHandle = (event) => {
    setTitle(event.target.value);
  };

  const radioChangeHandle = (event) => {
    setRadio(event.target.value);
  };

  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const params = {
    name: title,
  };

  const postData = () => {
    axios.post("http://127.0.0.1:8080/room", params);
  };

  const { mutate } = useMutation(postData, {
    onSuccess: () => {
      queryClient.invalidateQueries(["rooms"]);
    },
  });

  const submitRoom = () => {
    console.log(title);
    if (title.length === 0) {
      alert("방 제목을 입력해주세요");
      return;
    }
    // usemutation을 활용한 post
    mutate();
    dispatch(changeModalStatus());
  };

  return (
    <Modal>
      <div className={styles.createRoom}>
        <div className={styles.title}>
          <label htmlFor="title">방 제목 설정</label>
          <input
            id="title"
            type="text"
            name="title"
            onChange={titleInputHandle}
          />
        </div>
        <div className={styles.person}>
          <p>방 인원 설정</p>
          <div className={styles.buttons}>
            <input
              type="radio"
              value="2"
              name="person"
              id="two-type"
              onChange={radioChangeHandle}
              defaultChecked
            />
            <label htmlFor="two-type">2명</label>
            <input
              type="radio"
              value="4"
              name="person"
              id="four-type"
              onChange={radioChangeHandle}
            />
            <label htmlFor="four-type">4명</label>
            <input
              type="radio"
              value="8"
              name="person"
              id="eight-type"
              onChange={radioChangeHandle}
            />
            <label htmlFor="eight-type">8명</label>
          </div>
        </div>
        <Button onClick={submitRoom}>방 생성</Button>
      </div>
    </Modal>
  );
};

export default CreateRoom;
