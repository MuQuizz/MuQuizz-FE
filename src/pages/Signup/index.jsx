import React, { useState } from "react";
import styles from "./Signup.module.scss";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [sex, setSex] = useState("");

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    // 회원가입이 끝나면 웰컴페이지로 보낸다. 거기서 로그인하도록.
    navigate("/");
  };

  return (
    <div className={styles.signup}>
      <p>MUQUIZZ 회원가입</p>
      <Container>
        <form onSubmit={submitHandler}>
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
            <Button type="submit">회원가입</Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
