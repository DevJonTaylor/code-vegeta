import React from 'react';
import SavePages from "../../SavePages";
// import PageList from "../../PageList";
import './index.css'

import { Link } from 'react-router-dom';
import Auth from '../../../utils/auth';

const LeftPanel = () => {
  const logout = event => {
		event.preventDefault();
		Auth.logout();
	};

  return (
    <div className="panel__left border-r-2 border-neutral bg-gradient-to-b from-secondary to-accent">
      <div className="rounded-lg border-0 p-3 text-center transition ease-out hover:ease-in">
        <p className="bg-gradient-to-r from-neutral to-base-100 bg-clip-text text-4xl font-black text-transparent selection:bg-transparent">
          <a href="/">V</a>
        </p>
      </div>
      <div className="text-center border-0 p-3">
        <div className="dropdown dropdown-hover p-3 bg-neutral text-primary btn-ghost transition ease-out hover:ease-in rounded-lg">
            <p className="bg-gradient-to-r from-accent to-primary bg-clip-text text-4xl text-transparent selection:bg-transparent">
              <a className="font-black" href="/">V</a>
            </p>
            {Auth.loggedIn() &&
              <ul
                tabIndex="0"
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow app-text dropdown-lp"
              >
                <li>
                  <a href="/profile">
                    Profile
                  </a>
                </li>
                <li>
                    <a href="/gallery">
                      Gallery
                    </a>
                  </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a href="/" onClick={logout}>
                    Logout
                  </a>
                </li>
              </ul>
            }
          </div>

      </div>
      <div className="panel__basic-actions"></div>
      {/* <div className="panel__switcher lg:hidden"></div> */}
      {/* <div className="panel__devices lg:hidden"></div> */}
      <SavePages />
      {/* <PageList /> */}
    </div>
  );
};

export default LeftPanel;
