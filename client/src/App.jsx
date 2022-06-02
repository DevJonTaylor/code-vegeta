import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col text-center selection:bg-green-900">

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
      
    </div>
  );
}

export default App;
