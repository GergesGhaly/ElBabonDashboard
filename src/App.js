import "./App.css";
import React from "react";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ direction: "" }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
