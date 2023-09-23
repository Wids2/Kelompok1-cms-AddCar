import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import TestComponent from "./component/Test";
import CobaComponent from "./component/coba";

function App() {
  return (
    <div>
      {/* ini buat coba-coba aja */}
      <CobaComponent />
      <TestComponent />
    </div>
  );
}

export default App;
