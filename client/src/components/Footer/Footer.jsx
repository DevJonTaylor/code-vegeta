import React from "react";
import poweredBy from "./powered-by-vitawind-dark.png";


const Footer = () => {
  return (
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
  );
};

export default Footer;
