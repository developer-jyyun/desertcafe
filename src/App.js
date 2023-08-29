import "./App.css";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import BeverageItem from "./routes/BeverageItem";
import DesertItem from "./routes/DesertItem";
import beverageData from "./routes/beverageData";
import desertData from "./routes/desertData";
import NavWrap from "./components/Nav";

function App() {
  const [beverage, setBeverage] = useState(beverageData);
  const [desert, setDesert] = useState(desertData);
  const [isActive, setActive] = useState("false");
  const [desertCount, setDesertCount] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [beverageCount, setBeverageCount] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  // const [count, setCount] = useState(new Array(10).fill(0));
  // const [beverageCount, setBeverageCount] = useState(new Array(11).fill(0));

  // const ToggleClass = () => {
  //   setActive(!isActive);
  // };

  return (
    <div className="App">
      <header>
        <NavWrap />
      </header>
      <div className="wrap">
        <Routes>
          <Route
            path="/"
            element={
              <main className="main">
                <div
                  className="main-bg"
                  style={{
                    backgroundImage: "url(/assets/images/main-all.jpg)",
                  }}
                ></div>
                <div className="menu">
                  <h2>전체 메뉴 :: 디저트 & 음료</h2>
                  <DesertItem
                    desert={desert}
                    desertCount={desertCount}
                    setDesertCount={setDesertCount}
                  />
                  <BeverageItem
                    beverage={beverage}
                    beverageCount={beverageCount}
                    setBeverageCount={setBeverageCount}
                  />
                </div>
              </main>
            }
          />
          <Route
            path="/desert"
            element={
              <section className="desert">
                <div
                  className="main-bg"
                  style={{
                    backgroundImage: "url(/assets/images/main-desert.jpg)",
                  }}
                ></div>
                <div className="menu">
                  <h2>디저트</h2>

                  <DesertItem
                    desert={desert}
                    desertCount={desertCount}
                    setDesertCount={setDesertCount}
                  />
                </div>
              </section>
            }
          />
          <Route
            path="/beverage"
            element={
              <section className="beverage">
                <div
                  className="main-bg"
                  style={{ backgroundImage: "url(/assets/images/main-bv.jpg)" }}
                ></div>
                <div className="menu">
                  <h2>음료</h2>
                  <BeverageItem
                    beverage={beverage}
                    beverageCount={beverageCount}
                    setBeverageCount={setBeverageCount}
                  />
                </div>
              </section>
            }
          />

          <Route path="/pay" element={<div><h2>결제페이지는 언제하지..😫</h2></div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
