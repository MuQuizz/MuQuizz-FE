import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Outlet } from "react-router-dom";
// 우선 임시로 아무 아바타 설정
import avatar from "../../assets/profile/man/profile_12.png";
import Dropdown from "../UI/Dropdown";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const renderArrow = dropdown ? (
    <i className="fa-solid fa-caret-up"></i>
  ) : (
    <i className="fa-solid fa-caret-down"></i>
  );

  const handleArrow = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <header>
        <div className={styles.phrase}>
          <i className="fa-solid fa-music"></i>
          <span>MUQUIZZ</span>
        </div>
        <div className={styles.user} onClick={handleArrow}>
          <img src={avatar} alt="유저 아바타" />
          {renderArrow}
          {dropdown && (
            <Dropdown>
              <ul>
                <li>회원정보수정</li>
                <li>로그아웃</li>
              </ul>
            </Dropdown>
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
