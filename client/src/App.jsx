import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import poweredBy from "./powered-by-vitawind-dark.png";
import Navbar from "./components/Navbar/Navbar";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
// import function from Apollo Client that will retrieve the token from localStorage and include it with each request to the API.
import { setContext } from "@apollo/client/link/context";

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="flex flex-col text-center selection:bg-green-900">
        <header>
          <Navbar />
        </header>

        <main
          // className="grow bg-[#282c34] text-white"  DO WE NEED THIS AS A DIFF COLOR? SORRY FOR CHANGING IF SO - FEEL FREE TO CHANGE BACK
          className="grow bg-neutral text-accent"
          style={{ marginBottom: "0px" }}
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

        {/* ADDED bg-black TO FOOTER */}
        <footer className="flex w-full items-center justify-around bg-neutral">
          <div className="w-48">
            <p>
              Built with <span alt="sweat">💦</span> by
              <br />
              <code className="app-text text-[#8d96a7]">
                Jess, Jonathan, JT, Jordan, and Keenan
              </code>
              {""}
            </p>
          </div>
          <div className="w-49 hidden sm:flex">
            <p className="mt-3 flex gap-3 text-center text-[#8d96a7]">
              <a
                className="text-[#61dafb] transition-all hover:text-blue-400"
                href="https://github.com/DevJonTaylor/code-vegeta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              {" | "}
              <a
                className="text-[#61dafb] transition-all hover:text-blue-400"
                href="/donate"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </p>
          </div>
          <div className="w-49 hidden sm:flex">
            <img src={poweredBy} className="mx-auto my-5" alt="powered-by" />
          </div>
        </footer>
      </div>
  );
}

export default App;
