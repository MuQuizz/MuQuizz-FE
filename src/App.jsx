import "./App.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const login = useSelector((state) => {
    return state.login.login;
  });

  const navigate = useNavigate();

  // 아래 구문이 로그인 로그아웃 분기처리를 해줄것임
  useEffect(() => {
    // navigate와 같은건 useEffect에서 사용해야... 무한렌더링 조심
    if (!login) navigate("/");
  }, [login]);

  // 나중에 내용추가.
  // 로그인이 된 상태면 아바타 상태를 redux-persist에 미리 저장해놔야함
  // api로 아바타 정보받아온것을 넣어야한다 이말임.

  return (
    <div className="App">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
