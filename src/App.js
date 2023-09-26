import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import BarChartComponent from "./component/barChart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BarChartComponent />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
