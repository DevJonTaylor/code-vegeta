import "grapesjs-blocks-basic";
import "grapesjs-component-countdown";
import gjsForms from "grapesjs-plugin-forms";

const pluginsOpts = {
  "gjs-blocks-basic": {
    blocks: ["column1", "column2", "column3", "column3-7"],
    category: "Columns",
  },
  vegeta: {
    endpoint: "http://localhost:3001/editor",
  },
  [gjsForms]: {
    /* options */
  },
  "gjs-component-countdown": {
    startTime: "2022-06-01 21:00",
  },
};

export default pluginsOpts;
