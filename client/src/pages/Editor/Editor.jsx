import React from "react";
import "grapesjs/dist/css/grapes.min.css";
import "./Editor.css";
import grapesjs from "grapesjs";
import "grapesjs-blocks-basic";
import "grapesjs-component-countdown";
import "grapesjs-navbar";
import "grapesjs-lory-slider";
import gjsForms from "grapesjs-plugin-forms";
import grapesTouch from "grapesjs-touch";
import "./vegetaPlugin";
import SavePages from "../../components/SavePages";
import PageList from "../../components/PageList";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateBtn() {
    const tooltipBtns = document.querySelectorAll("[data-tip]");
    tooltipBtns.forEach((button) => {
      if (button.lastChild.nodeName === "#text") {
        const dataTip = button.getAttribute("data-tip");
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
        tooltip.classList.add("group-hover:scale-100");
        tooltip.textContent = dataTip;
        button.appendChild(tooltip);
      }
    });
  }

  componentDidMount() {
    const editor = grapesjs.init({
      container: "#gjs",
      plugins: [
        grapesTouch,
        gjsForms,
        "vegeta",
        "gjs-blocks-basic",
        "gjs-navbar",
        "gjs-component-countdown",
        "grapesjs-lory-slider"
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
          startTime: '2022-06-01 21:00'
        },
      },
      fromElement: true,
      height: "100%",
      width: "auto",
      // storageManager: false,
      storageManager: {
        type: "vegeta",
        stepsBeforeSave: 3,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
        contentTypeJson: true,
      },
      panels: {
        defaults: [
          {
            id: "panel-top",
            el: ".panel__top",
          },
          {
            id: "basic-actions",
            el: ".panel__basic-actions",
            buttons: [
              {
                id: "visibility",
                active: true,
                className: "sidebar-icon group",
                label: `
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z" />
                    </svg>
                `,
                command: "sw-visibility", // built-in command
                attributes: {
                  "data-tip": "Toggle Gridlines",
                },
              },
              {
                id: "export",
                className: "sidebar-icon group",
                label: `
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
                    </svg>
                `,
                command: "export-template",
                context: "export-template", // for grouping buttons w/in same panel
                attributes: {
                  "data-tip": "View Code",
                },
              },
              {
                id: "vegeta",
                className: "sidebar-icon group",
                label: `
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3M19 19H5V5H16.17L19 7.83V19M12 12C10.34 12 9 13.34 9 15S10.34 18 12 18 15 16.66 15 15 13.66 12 12 12M6 6H15V10H6V6Z" />
                    </svg>
                `,
                command: "vegeta",
                attributes: {
                  "data-tip": "Save to database",
                },
              },
              {
                id: "preview",
                className: "sidebar-icon group",
                label: `
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
            </svg>
                `,
                command: "preview",
                attributes: { "data-tip": "Preview" },
              },
              {
                id: "fullscreen",
                className: "sidebar-icon group",
                label: `
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 5.5L10 8H14L12 5.5M18 10V14L20.5 12L18 10M6 10L3.5 12L6 14V10M14 16H10L12 18.5L14 16M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3M21 19H3V5H21V19Z" />
                </svg>
                `,
                command: "fullscreen",
                attributes: { "data-tip": "Fullscreen" },
              },
              {
                id: "undo",
                className: "sidebar-icon group",
                label: `
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" />
                    </svg>
                `,
                command: "core:undo",
                attributes: { "data-tip": "Undo" },
              },
              {
                id: "redo",
                className: "sidebar-icon group",
                label: `
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z" />
            </svg>
                `,
                command: "core:redo",
                attributes: { "data-tip": "Redo" },
              },
              {
                id: "clear",
                className: "sidebar-icon hover:bg-red-600 group",
                label: `
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
            </svg>
                `,
                command: "core:canvas-clear",
                attributes: { "data-tip": "Clear Canvas" },
              },
              // {
              //   id: "show-json",
              //   className: "btn btn-ghost btn-show-json",
              //   label: "JSON",
              //   context: "show-json",
              //   command(editor) {
              //     editor.Modal.setTitle("Components JSON")
              //       .setContent(
              //         `<textarea style="width: 100%; height: 250px;">${JSON.stringify(
              //           editor.getComponents()
              //         )}</textarea>`
              //       )
              //       .open();
              //   },
              // },
            ],
          },
          {
            id: "layers",
            el: ".panel__right",
            resizable: {
              maxDim: 350,
              minDim: 200,
              tc: 0, // Top
              cr: 0, // Right
              bc: 0, // Bottom
              cl: 1, // Left
              keyWidth: "flex-basis",
            },
          },
          {
            id: "panel-switcher",
            el: ".panel__switcher",
            buttons: [
              {
                id: "show-layers",
                active: true,
                label: `
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 0L3 7L4.63 8.27L12 14L19.36 8.27L21 7L12 0M19.37 10.73L12 16.47L4.62 10.74L3 12L12 19L21 12L19.37 10.73M19.37 15.73L12 21.47L4.62 15.74L3 17L12 24L21 17L19.37 15.73Z" />
                  </svg>
                `,
                command: "show-layers",
                attributes: {
                  class: "sidebar-icon group",
                  "data-tip": "Layers",
                },
                // Once actived disable the possibility to turn it off
                togglable: false,
              },
              {
                id: "show-style",
                active: true,
                label: `
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z" />
                  </svg>
                `,
                attributes: {
                  class: "sidebar-icon group",
                  "data-tip": "Styles",
                },
                command: "show-styles",
                togglable: false,
              },
              {
                id: "show-blocks",
                active: true,
                label: `
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M2,2H11V11H2V2M17.5,2C20,2 22,4 22,6.5C22,9 20,11 17.5,11C15,11 13,9 13,6.5C13,4 15,2 17.5,2M6.5,14L11,22H2L6.5,14M19,17H22V19H19V22H17V19H14V17H17V14H19V17Z" />
                    </svg>
                `,
                attributes: {
                  class: "sidebar-icon group",
                  "data-tip": "Components",
                },
                command: "show-blocks",
                togglable: false,
              },
            ],
          },
          {
            id: "panel-devices",
            el: ".panel__devices",
            buttons: [
              {
                id: "device desktop",
                label: `
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />
                  </svg>
                `,
                command: "set-device-desktop",
                className: "sidebar-icon group",
                attributes: { "data-tip": "Desktop" },
                togglable: false,
              },
              {
                id: "device-tablet",
                label: `
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M19.25,19H4.75V3H19.25M14,22H10V21H14M18,0H6A3,3 0 0,0 3,3V21A3,3 0 0,0 6,24H18A3,3 0 0,0 21,21V3A3,3 0 0,0 18,0Z" />
                    </svg>
              `,
                className: "sidebar-icon group",
                attributes: { "data-tip": "Tablet" },
                command: "set-device-tablet",
                togglable: false,
              },
              {
                id: "device-mobile",
                label: `
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
                  </svg>
              `,
                className: "sidebar-icon group",
                attributes: { "data-tip": "Mobile" },
                command: "set-device-mobile",
                togglable: false,
              },
            ],
          },
        ],
      },

      // MANAGERS
      blockManager: {
        appendTo: "#blocks",
        custom: true,
        blocks: [
          {
            id: "section", // id field is required!
            label: `
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4,5H20V7H4V5M4,9H20V11H4V9M4,13H20V15H4V13M4,17H14V19H4V17Z" />
              </svg>
            `, // You can use HTML/SVG inside labels
            attributes: { class: "gjs-block-section, gjs-block" },
            content: `<section>
                    <h1>This is a simple title</h1>
                    <div>This is just Lorem Ipsum: Lorem the fuckin' ipsum dude...</div>
                    <section>
                  `,
          },
          {
            id: "text",
            label: `
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4,9H20V11H4V9M4,13H14V15H4V13Z" />
                </svg>
            `,
            content: '<div data-gjs-type="text">Insert some text here</div>',
          },
          {
            id: "image",
            label: `
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M6,20H15L18,20V12L14,16L12,14L6,20M8,9A2,2 0 0,0 6,11A2,2 0 0,0 8,13A2,2 0 0,0 10,11A2,2 0 0,0 8,9Z" />
              </svg>
            `,
            select: true, // select the component when dropped
            content: { type: "image" }, // can pass components as JSON (notice use of defined component type 'image')
            activate: true, // triggers 'active' event on component when dropped and 'image' reacts by opening asset manager
          },
          {
            id: "link",
            label: "LINK",
            select: true,
            content: { type: "link" },
            activate: true,
          },
        ],
      },
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

    editor.on("run", (a, b, c) => {
      // const senderId = document.querySelector(`#${c.sender.attributes.id}`);
      // const checkForSpan = (el) => {
      //   el.querySelector(`"[data-tip]='${senderId}'"`)
      //     ? false
      //     : this.updateBtn(el);
      //   if (c.sender) {
      //     checkForSpan(senderId);
      //   }
      // };
      this.updateBtn();
    });
    this.updateBtn();
  }

  render() {
    return (
      <div className="flex w-full" style={{ height: "100vh" }}>
        <div className="panel__left border-r-2 border-slate-800">
          <div className="glass rounded-lg border-0 p-3 text-center transition ease-out hover:ease-in">
            <p className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-3xl font-black text-transparent selection:bg-transparent">
              <a href="/">V</a>
            </p>
          </div>
          <div className="panel__basic-actions"></div>
          {/* <SavePages /> */}
          {/* <PageList /> */}
        </div>
        <div className="flex w-full flex-col">
          <div className="panel__top border-b-2 border-slate-800">
            <div className="panel__devices"></div>
            <div className="divider"></div>
            <div className="panel__switcher"></div>
          </div>
          <div className="editor-row">
            <div className="editor-canvas">
              <div id="gjs">
                <h1>Hello World Component!</h1>
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
  }
}

export default Editor;
