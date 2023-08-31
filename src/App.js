import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/SignUp";
import Home from "./components/Home";
import NHome from "./components/NHome";
import NAbout from "./components/NAbout";
import NContact from "./components/NContact";
import NServices from "./components/NServices";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<NHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<NAbout />} />;
          <Route path="/contact" element={<NContact />} />;
          <Route path="/services" element={<NServices />} />;
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
