import React, { useState } from "react";
import styles from "./Signup.module.scss";
import Button from "../../components/UI/Button";
import Container from "../../components/UI/LoginContainer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [sex, setSex] = useState("MAN");

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const params = {
      username: email,
      name: nickname,
      password: password,
      oauth: "BASIC",
      gender: sex,
      role: "USER",
    };

    try {
      async function signup() {
        const data = await axios.post(
          "http://127.0.0.1:8080/user/register/local",
          params
        );
        console.log(data);
        if (data.data.code !== 200) {
          throw new Error();
        }
      }
      signup();
      // 회원가입이 끝나면 웰컴페이지로 보낸다. 거기서 로그인하도록.
      navigate("/");
    } catch (error) {
      console.log(`통신 오류: ${error.response}`);
    }
  };

  return (
    <div className={styles.signup}>
      <p>MUQUIZZ 회원가입</p>
      <Container>
        <form onSubmit={submitHandler}>
          <div className={styles.inputHeader}>
            <label htmlFor="email">이메일</label>
            {!email.includes("@") && email.length > 0 && (
              <span>이메일을 올바르게 입력해주세요.</span>
            )}
          </div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="test@naver.com"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <div className={styles.inputHeader}>
            <label htmlFor="password">비밀번호</label>
            {password.length < 8 && password.length > 0 && (
              <span>비밀번호를 8자리 이상 입력해주세요.</span>
            )}
          </div>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="********"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div className={styles.inputHeader}>
            <label htmlFor="nickname">닉네임</label>
            {nickname.length < 2 && nickname.length > 0 && (
              <span>닉네임을 두 글자 이상 입력해주세요.</span>
            )}
          </div>
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
              <option value="MAN">성별</option>
              <option value="MAN">남자</option>
              <option value="WOMEN">여자</option>
            </select>
            {!email.includes("@") ||
            nickname.length < 2 ||
            password.length < 8 ? (
              <Button
                type="submit"
                style={{ filter: "grayscale(100%)", pointerEvents: "none" }}
              >
                회원가입
              </Button>
            ) : (
              <Button type="submit">회원가입</Button>
            )}
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
