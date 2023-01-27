import React from "react";
import styles from "./Avatar.module.scss";
import Modal from "../UI/Modal";
import boy1 from "../../assets/profile/man/1.png";
import boy2 from "../../assets/profile/man/2.png";
import boy3 from "../../assets/profile/man/3.png";
import boy4 from "../../assets/profile/man/4.png";
import boy5 from "../../assets/profile/man/5.png";
import boy6 from "../../assets/profile/man/6.png";
import boy7 from "../../assets/profile/man/7.png";
import boy8 from "../../assets/profile/man/8.png";
import girl1 from "../../assets/profile/women/1.png";
import girl2 from "../../assets/profile/women/2.png";
import girl3 from "../../assets/profile/women/3.png";
import girl4 from "../../assets/profile/women/4.png";
import girl5 from "../../assets/profile/women/5.png";
import girl6 from "../../assets/profile/women/6.png";
import girl7 from "../../assets/profile/women/7.png";
import girl8 from "../../assets/profile/women/8.png";
import girl9 from "../../assets/profile/women/9.png";

const Avatar = () => {
  const manAvatars = [boy1, boy2, boy3, boy4, boy5, boy6, boy7, boy8];
  const womenAvatars = [
    girl1,
    girl2,
    girl3,
    girl4,
    girl5,
    girl6,
    girl7,
    girl8,
    girl9,
  ];
  for (let i = 1; i < 9; i++) {}

  return (
    <Modal>
      <p>변경할 아바타를 선택해주세요!</p>
      <div className={styles.container}>
        {manAvatars.map((avatar, i) => {
          return <img src={avatar} alt="avatar" key={i} />;
        })}
      </div>
    </Modal>
  );
};

export default Avatar;
