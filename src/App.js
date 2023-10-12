import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import BarChartComponent from "./component/barChart";
import ListCarComponent from "./component/listcar";
import EditCars from "./pages/EditCars";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<BarChartComponent />} />
        <Route path="login" element={<Login />} />
        <Route path="list-car" element={<ListCarComponent />} />
        <Route path="/edit-cars/:id" element={<EditCars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
