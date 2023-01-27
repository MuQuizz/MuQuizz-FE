import React, { useState } from "react";
import styles from "./User.module.scss";
import avatar from "../../assets/profile/man/profile_12.png";
import Button from "../../components/UI/Button";
import Avatar from "../../components/User/Avatar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeModalStatus } from "../../store/modalSlice";

const User = () => {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);

  // 나중에 state에 불러온 값을 넣어놔야함. 이미지든 뭐든...
  const [nickName, setNickName] = useState("느그찬");

  const [nameInput, setNameInput] = useState("");

  // modal을 redux state로 관리 props드릴링이 두번해야해서...
  const modal = useSelector((state) => {
    return state.modal.modal;
  });

  // 수정버튼이 트리거되면 api put요청 ... 그러면 state는?
  const editHandler = () => {
    setNickName(nameInput);
    setEdit(!edit);
  };

  const quitHandler = () => {
    setEdit(!edit);
  };

  const nickNameHandler = (event) => {
    setNameInput(event.target.value);
  };

  const modalHandler = () => {
    dispatch(changeModalStatus());
  };

  const nickname = !edit ? (
    <span>{`닉네임: ${nickName}`}</span>
  ) : (
    <input
      type="text"
      placeholder="변경할 닉네임을 입력해주세요"
      onChange={nickNameHandler}
    />
  );

  return (
    <section className={styles.container}>
      {modal && <Avatar />}
      <div className={styles.avatar}>
        <img src={avatar} alt="유저아바타" />
        <Button onClick={modalHandler}>아바타 변경</Button>
      </div>
      <div className={styles.userInfo}>
        <span>{`이메일: a751546@naver.com`}</span>
        <div className={styles.nickname}>
          {nickname}
          <i
            className="fa-solid fa-pen-to-square"
            style={{ color: "rgb(61, 225, 61)" }}
            onClick={edit ? editHandler : quitHandler}
          ></i>
          {edit && (
            <i
              className="fa-solid fa-xmark"
              style={{ color: "red" }}
              onClick={quitHandler}
            ></i>
          )}
        </div>
        <span>{`통산 승리 횟수: 0회`}</span>
      </div>
    </section>
  );
};

export default User;
