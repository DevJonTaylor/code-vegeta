import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing/Landing";
import Editor from "./pages/Editor/Editor";
import Donate from "./pages/Donate/Donate";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

import "./index.css";
import './pages/Signup/Signup.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="donate" element={<Donate />} />
        </Route>
        {/* Keep editor out of App route to prevent headers and footers */}
        <Route path="editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

console.log(process.env.NODE_ENV);
