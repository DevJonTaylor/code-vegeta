import React from "react";
import poweredBy from "./powered-by-vitawind-dark.png";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-around bg-neutral">
      <div className="w-48">
        <p className="text-primary">
          Built with <span alt="sweat">💦</span> by
          <br />
          <code className="app-text text-accent">
            Jess, Jonathan, JT, Jordan, and Keenan
          </code>
          {""}
        </p>
      </div>
      <div className="w-49 hidden sm:flex">
        <p className="mt-3 flex gap-3 text-center">
          <a
            className="text-primary transition-all hover:text-blue-400"
            href="https://github.com/DevJonTaylor/code-vegeta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          {" | "}
          <a
            className="text-primary transition-all hover:text-blue-400"
            href="/#/donate"
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
