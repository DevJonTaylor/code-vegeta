import React, { useState } from "react";
import poweredBy from "./powered-by-vitawind-dark.png";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center selection:bg-green-900">
      <header>
        <Navbar />
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between bg-[#282c34] text-white">
        <p className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-5xl font-black text-transparent selection:bg-transparent">
          VEGETA
        </p>
        <p className="mt-3">
          <button
            type="button"
            className="my-6 rounded bg-gray-300 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
      </main>

      <footer className="mb-8 flex w-full items-center justify-around">
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
