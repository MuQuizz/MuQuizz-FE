import React, { useState } from "react";
import Container from "../../components/UI/LoginContainer";
import styles from "./Login.module.scss";
import Button from "../../components/UI/Button";
import { useDispatch } from "react-redux";
import { changeLoginStatus } from "../../store/loginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    // 만약 validate 회원정보면
    dispatch(changeLoginStatus(true));
    console.log(email, password);
    navigate("/main");
  };

  return (
    <div className={styles.login}>
      <p>MUQUIZZ 로그인</p>
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
            autoComplete="off"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Button type="submit">로그인</Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
