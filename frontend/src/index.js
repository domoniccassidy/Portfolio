import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./Components/Portfolio";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Portfolio />
  </BrowserRouter>,
  document.getElementById("root")
);
