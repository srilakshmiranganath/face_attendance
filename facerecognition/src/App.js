import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Attendance from "./pages/Attendance";
import { FaceRegister } from "./pages/FaceRegister";
import { Addclass } from "./pages/Addclass";
import { Chooseclass } from "./pages/Chooseclass";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="add_class" element={<Addclass />} />
            <Route path="face_register" element={<FaceRegister />} />
            <Route path="register" element={<Register />} />
            <Route path="choose_class" element={<Chooseclass />} />
            <Route path="attendance" element={<Attendance />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));