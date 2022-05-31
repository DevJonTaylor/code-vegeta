import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import Donate from "./pages/Donate/Donate";
import Footer from "./components/Footer/Footer";
import Editor from "./pages/Editor/Editor";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col text-center selection:bg-green-900">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="editor" element={<Editor />} />
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

{
  /* <BrowserRouter>
<Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Landing />} />
    <Route path="signup" element={<Signup />} />
    <Route path="login" element={<Login />} />
    <Route path="profile" element={<Profile />} />
    <Route path="donate" element={<Donate />} />
  </Route>
  {/* Keep editor out of App route to prevent headers and footers */
}
// <Route path="editor" element={<Editor />} /> */}
{
  /* </Routes>
</BrowserRouter> */
}

// {/* ADDED bg-black TO FOOTER */}
// <footer className="flex w-full items-center justify-around bg-neutral">
// <div className="w-48">
//   <p>
//     Built with <span alt="sweat">💦</span> by
//     <br />
//     <code className="app-text text-[#8d96a7]">
//       Jess, Jonathan, JT, Jordan, and Keenan
//     </code>
//     {""}
//   </p>
// </div>
// <div className="w-49 hidden sm:flex">
//   <p className="mt-3 flex gap-3 text-center text-[#8d96a7]">
//     <a
//       className="text-[#61dafb] transition-all hover:text-blue-400"
//       href="https://github.com/DevJonTaylor/code-vegeta"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Github
//     </a>
//     {" | "}
//     <a
//       className="text-[#61dafb] transition-all hover:text-blue-400"
//       href="/donate"
//       rel="noopener noreferrer"
//     >
//       Donate
//     </a>
//   </p>
// </div>
// <div className="w-49 hidden sm:flex">
//   <img src={poweredBy} className="mx-auto my-5" alt="powered-by" />
// </div>
// </footer>
