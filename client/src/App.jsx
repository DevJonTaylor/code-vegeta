import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import poweredBy from "../powered-by-vitawind-bright.png";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col text-center selection:bg-green-900">
      <Navbar />

      <main
        // className="grow bg-[#282c34] text-white"  DO WE NEED THIS AS A DIFF COLOR? SORRY FOR CHANGING IF SO - FEEL FREE TO CHANGE BACK
        className="grow bg-neutral text-neutral"
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

      <Footer />
    </div>
  );
}

export default App;
