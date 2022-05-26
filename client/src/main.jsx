import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "dotenv/config";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

console.log(process.env.NODE_ENV);
