import "./App.scss";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const login = useSelector((state) => {
    return state;
  });

  console.log(login);

  return (
    <div className="App">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
