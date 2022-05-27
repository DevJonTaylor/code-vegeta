import React from "react";
import "grapesjs/dist/css/grapes.min.css";
import "./Editor.css";
import grapesjs from "grapesjs";
import 'grapesjs-blocks-basic';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const editor = grapesjs.init({
      container: "#gjs",
      plugins: ['gjs-blocks-basic'],
      pluginsOpts: {
        'gjs-blocks-basic': {
          blocks: [
            'column1',
            'column2',
            'column3',
            'column3-7'
          ],
          category: 'Columns'
        }
      },
      fromElement: true,
      height: "100%",
      width: "auto",
      storageManager: false,
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
                className: "btn btn-ghost btn-toggle-borders",
                label: `
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z" />
                    </svg>
                `,
                command: "sw-visibility", // built-in command
              },
              {
                id: "export",
                className: "btn btn-ghost btn-open-export",
                label: `
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
                    </svg>
                `,
                command: "export-template",
                context: "export-template", // for grouping buttons w/in same panel
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
                attributes: { class: "btn btn-ghost" },
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
                attributes: { class: "btn btn-ghost" },
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
                attributes: { class: "btn btn-ghost" },
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
                className: "btn btn-ghost",
                active: true,
                togglable: false,
              },
              {
                id: "device-tablet",
                label: `
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M19.25,19H4.75V3H19.25M14,22H10V21H14M18,0H6A3,3 0 0,0 3,3V21A3,3 0 0,0 6,24H18A3,3 0 0,0 21,21V3A3,3 0 0,0 18,0Z" />
                    </svg>
              `,
                className: "btn btn-ghost",
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
                className: "btn btn-ghost",
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
  }
  render() {
    return (
      <div className="flex w-full" style={{ height: "100vh" }}>
        <div className="panel__left border-r-2 border-slate-800">
          <div className="btn-ghost rounded-lg border-0 p-3 text-center transition ease-out hover:ease-in">
            <p className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-3xl font-black text-transparent selection:bg-transparent">
              <a href="/">V</a>
            </p>
          </div>
          <div className="divider"></div>
          <div className="panel__basic-actions"></div>
          <div className="divider"></div>
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
