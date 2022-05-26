import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Landing from './pages/Landing/Landing';
// import Editor from './pages/Editor/Editor';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Landing />
    {/* <Editor /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
