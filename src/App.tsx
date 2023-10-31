import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Routing from "./routing/Routing";
import { BrowserRouter } from "react-router-dom";
import Login3 from "./views/login/Login3";
import Login4 from "./views/login/Login4";
import Dashboard from "./views/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routing />
      {/* <Dashboard /> */}
      {/* <Login4 /> */}
    </BrowserRouter>
  );
}

export default App;
