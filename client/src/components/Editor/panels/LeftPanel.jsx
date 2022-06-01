import React from 'react';
import SavePages from "../../SavePages";
// import PageList from "../../PageList";
import './index.css'

const LeftPanel = () => {
  return (
    <div className="panel__left border-r-2 border-neutral bg-gradient-to-b from-neutral to-base-100">
      <div className="rounded-lg border-0 p-3 text-center transition ease-out hover:ease-in">
        <p className="bg-gradient-to-r from-accent to-primary bg-clip-text text-4xl font-black text-transparent selection:bg-transparent">
          <a href="/">V</a>
        </p>
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
