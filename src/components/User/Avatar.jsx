import React from "react";
import styles from "./Avatar.module.scss";
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { changeAvatar } from "../../store/avatarSlice";
import { changeModalStatus } from "../../store/modalSlice";

const Avatar = () => {
  // 나중에 남자와 여자에 따라 분류
  const manAvatars = [1, 2, 3, 4, 5, 6, 7, 8];
  const womenAvatars = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const avatar = useSelector((state) => {
    return state.avatar.avatar;
  });

  const dispatch = useDispatch();

  const avatarHandler = (num) => {
    dispatch(changeAvatar(num));
    dispatch(changeModalStatus());
  };

  return (
    <Modal>
      <p>변경할 아바타를 선택해주세요!</p>
      <div className={styles.container}>
        {manAvatars.map((avatar, i) => {
          return (
            <img
              src={`../../../assets/profile/man/${avatar}.png`}
              alt="avatar"
              key={i}
              onClick={() => avatarHandler(i + 1)}
            />
          );
        })}
      </div>
    </Modal>
  );
};

export default Avatar;
