import React from "react";
import { render } from "react-dom";
import "./assets/style.scss";
import App from "./components/app";

const rootEl = document.getElementById("app");

render(<App />, rootEl);
