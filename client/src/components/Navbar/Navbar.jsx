import React from "react";
import { Link } from 'react-router-dom';
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Auth from '../../utils/auth';
import './Navbar.css';

const Navbar = () => {
  const logout = event => {
		event.preventDefault();
		Auth.logout();
	};

  return (
    <header className="navbar bg-neutral">
      <div className="flex-1">
        <div className="btn-ghost border-0 transition ease-out hover:ease-in rounded-lg p-3">
          <p className="bg-gradient-to-r from-base-100 to-accent bg-clip-text text-5xl font-black text-transparent selection:bg-transparent">
            <Link to="/">
              VEGETA
            </Link>
          </p>
        </div>
      </div>

      <ThemeSwitcher />

      {/* FOR USER */}
      {Auth.loggedIn() ? (
      <>
        <div className="flex-none">
          <div className="dropdown-end dropdown dropdown-hover bg-neutral text-primary pr-3 pl-6">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge indicator-item badge-sm">8</span>
              </div>
            </label>
            <div
              tabIndex="0"
              className="rounded-xl dropdown dropdown-content card-compact mt-16 bg-base-100 shadow cart-size"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown-end dropdown dropdown-hover p-3 bg-neutral text-primary">
            <label tabIndex="0" className="avatar btn btn-ghost btn-circle">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow app-text"
            >
              <li>
                <Link to="profile">
                  <p>Profile</p>
                </Link>
              </li>
              <li>
                <Link to="gallery">
                  <p>Gallery</p>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link to="donate">
                  <p>Donate</p>
                </Link>
              </li>
              <li>
                <a href="/" onClick={logout}>
                Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
      ) : (
      <>
        <div className="flex-none">
          <div className="dropdown dropdown-hover dropdown-end p-3 bg-neutral text-primary">
            <label tabIndex="0" className="avatar btn btn-ghost btn-circle">
              <div className="w-10 rounded-full dropdown-img">
              </div>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow app-text"
            >
              <li>
                <Link to="login">
                  <p>Sign In</p>
                </Link>
              </li>
              <li>
                <Link to="signup">
                  <p>Sign Up</p>
                </Link>
              </li>
              <li>
                <Link to="donate">
                  <p>Donate</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
      )}
    </header>
  );
};

export default Navbar;
