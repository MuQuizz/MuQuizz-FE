import React from "react";
import styles from "./Welcome.module.scss";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <p className={styles.phrase}>
        <i className="fa-solid fa-music"></i>
        <span>MUQUIZZ</span>
      </p>
      <p>음악의 신은 누구?</p>
      <p>여러 플레이어들과 당신의 음악 실력을 겨뤄보세요!</p>
      <div className={styles.user}>
        <Link to="/login">
          <Button>로그인</Button>
        </Link>
        <Link to="/signup">
          <Button>회원가입</Button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
