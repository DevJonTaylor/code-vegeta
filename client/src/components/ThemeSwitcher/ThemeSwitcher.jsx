import React, { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeSwitcher = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  const themes = [
    "synthwave",
    "cyberpunk",
    "valentine",
    "forest",
    "aqua",
    "luxury",
    "acid",
    "night",
    "coffee",
    "lemonade",
    "cupcake",
    "cmyk",
    "halloween",
    "dracula",
  ];

  return (
    <div className="dropdown">
      <label tabIndex="0" className="sidebar-icon">
        <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"
          />
        </svg>
      </label>
      <ul
        tabIndex="0"
        className="dropdown-content menu rounded-box w-48 bg-base-100 p-0 shadow"
      >
        {themes.map((theme) => {
          return (
            <li key={theme}>
              <button data-set-theme={theme} data-act-class="ACTIVECLASS">
                {theme.toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
