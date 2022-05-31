import React, { useEffect } from "react";
import "grapesjs/dist/css/grapes.min.css";
import "./Editor.css";
import grapesjs from "grapesjs";
import "grapesjs-blocks-basic";
import "grapesjs-component-countdown";
import "grapesjs-navbar";
// import "grapesjs-lory-slider";
// import "grapesjs-tabs";
import gjsForms from "grapesjs-plugin-forms";
import SavePages from "../SavePages";
import PageList from "../PageList";

import RunBuddy from "../RunBuddy/RunBuddy";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import panels from "./panels";
import blockManager from './blockManager';

const Editor = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      canvas: {
        // TEMPLATES
        styles: [
          "https://laszlo-ratesic.github.io/run-buddy/assets/css/style.css",
        ],
      },
      plugins: [
        gjsForms,
        "vegeta",
        "gjs-blocks-basic",
        "gjs-navbar",
        "gjs-component-countdown",
        // "grapesjs-lory-slider",
        // "grapesjs-tabs",
      ],
      pluginsOpts: {
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
      },
      fromElement: true,
      height: "100%",
      width: "auto",
      // storageManager: false,
      // Enables progress to be saved to localStorage
      storageManager: {
        type: "local",
        autosave: true,
        autoload: true,
        stepsBeforeSave: 1,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
        contentTypeJson: true,
      },
      panels: panels,

      // MANAGERS
      blockManager: blockManager,
      layerManager: {
        appendTo: ".layers-container",
      },
      selectorManager: {
        appendTo: ".styles-container",
      },
      styleManager: {
        appendTo: ".styles-container",
        sectors: [
          {
            name: "General",
            open: false,
            properties: [
              "display",
              "float",
              "position",
              "top",
              "right",
              "left",
              "bottom",
            ],
          },
          {
            name: "Flex",
            open: false,
            properties: [
              "flex-direction",
              "flex-wrap",
              "justify-content",
              "align-items",
              "align-content",
              "order",
              "flex-basis",
              "flex-grow",
              "flex-shrink",
              "align-self",
            ],
          },
          {
            name: "Dimension",
            open: false,
            buildProps: ["width", "min-height", "padding"],
            properties: [
              {
                // Input Type
                // int | radio | select | color | slider | file | composite | stack
                type: "integer",
                name: "The width", // Property label
                property: "width", // CSS property
                units: ["px", "%"], // Units only available for int
                defaults: "auto", // default value
                min: 0, // min value, available for ints only
              },
            ],
          },
          {
            name: "Typography",
            open: false,
            properties: [
              "font-family",
              "font-size",
              "font-weight",
              "letter-spacing",
              "color",
              "line-height",
              "text-align",
              "text-shadow",
            ],
          },
          {
            name: "Decorations",
            open: false,
            properties: [
              "background-color",
              "border-radius",
              "border",
              "box-shadow",
              "background",
            ],
          },
          {
            name: "Extra",
            open: false,
            buildProps: ["background-color", "box-shadow", "custom-prop"],
            properties: [
              {
                id: "custom prop",
                name: "Custom label",
                property: "font-size",
                type: "select",
                defaults: "32px",
                // List of options, available only for 'select' and 'radio' types
                options: [
                  { value: "12px", name: "Tiny" },
                  { value: "18px", name: "Medium" },
                  { value: "32px", name: "Big" },
                ],
              },
            ],
          },
        ],
      },
      deviceManager: {
        devices: [
          {
            name: "Desktop",
            width: "",
          },
          {
            name: "Tablet",
            width: "768px",
            widthMedia: "820px",
          },
          {
            name: "Mobile",
            width: "320px",
            widthMedia: "480px",
          },
        ],
      },
    });

    editor.Commands.add("show-layers", {
      getRowEl(editor) {
        return editor.getContainer().closest(".editor-row");
      },
      getLayersEl(row) {
        return row.querySelector(".layers-container");
      },

      run(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = "";
      },
      stop(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = "none";
      },
    });

    editor.Commands.add("show-blocks", {
      getRowEl(editor) {
        return editor.getContainer().closest(".editor-row");
      },
      getBlocksEl(row) {
        return row.querySelector("#blocks");
      },

      run(editor, sender) {
        const blEl = this.getBlocksEl(this.getRowEl(editor));
        blEl.style.display = "";
      },
      stop(editor, sender) {
        const blEl = this.getBlocksEl(this.getRowEl(editor));
        blEl.style.display = "none";
      },
    });

    editor.Commands.add("show-styles", {
      getRowEl(editor) {
        return editor.getContainer().closest(".editor-row");
      },
      getStyleEl(row) {
        return row.querySelector(".styles-container");
      },

      run(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = "";
      },
      stop(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = "none";
      },
    });

    editor.Commands.add("set-device-desktop", {
      run: (editor) => editor.setDevice("Desktop"),
    });
    editor.Commands.add("set-device-tablet", {
      run: (editor) => editor.setDevice("Tablet"),
    });
    editor.Commands.add("set-device-mobile", {
      run: (editor) => editor.setDevice("Mobile"),
    });
    editor.Commands.add("vegeta", {
      run: (editor) => editor.store(),
    });

    /* Render tooltips */
    function updateBtn() {
      /* Iterate over elements with a data-tip attribute */
      const tooltipBtns = document.querySelectorAll("[data-tip]");
      tooltipBtns.forEach((button) => {
        /* elements who don't have a tooltip */
        if (button.lastChild.nodeName === "#text") {
          /* pull the tooltip text from the custom data attribute */
          const dataTip = button.getAttribute("data-tip");
          /* and create a span containing the tooltip */
          const tooltip = document.createElement("span");
          if (
            dataTip === "Desktop" ||
            dataTip === "Tablet" ||
            dataTip === "Mobile" ||
            dataTip === "Styles" ||
            dataTip === "Components"
          ) {
            tooltip.classList.add("topbar-tooltip");
          } else if (dataTip === "Layers") {
            tooltip.classList.add("topbar-tooltip__left");
          } else {
            tooltip.classList.add("sidebar-tooltip");
          }
          /* group-hover: lets us effect the styles of a child element when a parent is hovered */
          tooltip.classList.add("group-hover:scale-100");
          tooltip.textContent = dataTip;
          button.appendChild(tooltip);
        }
      });
    }

    editor.on("run", (a, b, c) => {
      updateBtn();
    });
    updateBtn();
  }, []);

  return (
    <div className="flex w-full" style={{ height: "100vh" }}>
      <div className="panel__left border-r-2 border-neutral">
        <div className="rounded-lg border-0 p-3 text-center transition ease-out hover:ease-in">
          <p className="bg-gradient-to-r from-accent to-primary bg-clip-text text-4xl font-black text-transparent selection:bg-transparent">
            <a href="/">V</a>
          </p>
        </div>
        <div className="panel__basic-actions"></div>
        <SavePages />
        {/* <PageList /> */}
      </div>
      <div className="flex w-full flex-col">
        <div className="panel__top border-b-2 border-neutral">
          <div className="panel__devices"></div>
          <div className="divider"></div>
          <ThemeSwitcher />
          <div className="divider"></div>
          <div className="panel__switcher"></div>
        </div>
        <div className="editor-row">
          <div className="editor-canvas">
            <div id="gjs">
              <RunBuddy />
            </div>
          </div>
          <div className="panel__right">
            <div className="layers-container"></div>
            <div className="styles-container"></div>
            <div id="blocks"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
