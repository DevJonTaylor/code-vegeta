import React, { useEffect } from "react";
import "grapesjs/dist/css/grapes.min.css";
import "./Editor.css";
import editorConfig from "./config/editorConfig";
// import styles from './template.css';

import RunBuddy from "../RunBuddy/RunBuddy";

import TopPanel from "./panels/TopPanel";
import LeftPanel from "./panels/LeftPanel";
import RightPanel from "./panels/RightPanel";

const Editor = () => {
  useEffect(() => {
    editorConfig();
  }, []);

  return (
    <div className="flex w-full" style={{ height: "100vh" }}>
      {/* LEFTSIDE Panel with basic actions */}
      <LeftPanel />
      <div className="flex w-full flex-col">
        {/* TOP Panel with device-, theme-, and panel-switchers */}
        <TopPanel />
        <div className="editor-row">
          <div className="editor-canvas">
            <div id="gjs">
                {/* TEMPLATE GOES HERE */}
              {/* <style>
                {styles}
              </style> */}
              <RunBuddy />
            </div>
          </div>
          {/* RIGHTSIDE Panel with layer-, style-, and block-managers */}
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default Editor;
