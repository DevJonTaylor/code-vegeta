import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import poweredBy from "./powered-by-vitawind-dark.png";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col text-center selection:bg-green-900">
      <header>
        <Navbar />
      </header>

      <main
        className="grow bg-[#282c34] text-white"
        style={{ marginBottom: "63px" }}
      >
        <Outlet />
        {/* <p className="mt-3">
            <button
              type="button"
              className="my-6 rounded bg-gray-300 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p> */}
      </main>

      <footer className="flex w-full items-center justify-around">
        <div className="w-48">
          <p>
            Built with <span alt="sweat">💦</span> by
            <br />
            <code className="text-[#8d96a7]">
              Jess, Jonathan, JT, Jordan, and Keenan
            </code>
            {""}
          </p>
        </div>
        <div className="hidden w-48 sm:flex">
          <p className="mt-3 flex gap-3 text-center text-[#8d96a7]">
            <a
              className="text-[#61dafb] transition-all hover:text-blue-400"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className="text-[#61dafb] transition-all hover:text-blue-400"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </div>
        <div className="hidden w-48 sm:flex">
          <img src={poweredBy} className="mx-auto my-8" alt="powered-by" />
        </div>
      </footer>
    </div>
  );
}

export default App;
