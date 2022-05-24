import { Route, Routes } from "react-router-dom";
import Body from "./components/Body/Body";
import { Header } from "./components/Header/Header";
import "./index.css";

import {Home} from "./components/Home/Home"
import Input from "./components/Input/Input";
import Calander from "./components/Calander/Calander";

function App() {
  return (
    <div className="app">

      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/calender" element={<Calander />}></Route>
        <Route path="/input" element={<Input />}></Route>
      </Routes>
      
      {/* <hr />
      <Body />
      <div className="footer">
        <h1>Footer</h1>
      </div> */}
    </div>
  );
}

export default App;
