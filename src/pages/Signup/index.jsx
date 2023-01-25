import React, { useState } from "react";
import styles from "./Signup.module.scss";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [sex, setSex] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.signup}>
      <p>MUQUIZZ 회원가입</p>
      <Container>
        <form>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="test@naver.com"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="********"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <label htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            type="text"
            name="nickname"
            placeholder="느그찬"
            onChange={(event) => {
              setNickname(event.target.value);
            }}
          />
          <label htmlFor="sex">성별</label>
          <div className={styles.lastBox}>
            <select
              name="sex"
              id="sex"
              onChange={(event) => {
                setSex(event.target.value);
              }}
            >
              <option value="">성별</option>
              <option value="male">남자</option>
              <option value="female">여자</option>
            </select>
            <Button type="submit" onClick={submitHandler}>
              회원가입
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
