import React from "react";
import "grapesjs/dist/css/grapes.min.css";
import "./Editor.css";
import grapesjs from "grapesjs";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const editor = grapesjs.init({
      container: "#gjs",
      plugins: ["gjs-blocks-basic"],
      puginsOpts: {
        "gjs-blocks-basic": {
          blocks: [
            "column1",
            "column2",
            "column3",
            "column3-7",
            "text",
            "link",
            "image",
            "video",
            "map",
          ],
        },
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
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd" />
                </svg>
                `,
                command: "sw-visibility", // built-in command
              },
              {
                id: "export",
                className: "btn btn-ghost btn-open-export",
                label: `
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
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
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
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
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
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
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
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
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" />
                  </svg>
                `,
                command: "set-device-desktop",
                className: "btn btn-ghost",
                active: true,
                togglable: false,
              },
              {
                id: "device-mobile",
                label: `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
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
        custom: false,
        blocks: [
          {
            id: "section", // id field is required!
            label: "<b>Section</b>", // You can use HTML/SVG inside labels
            attributes: { class: "gjs-block-section, gjs-block" },
            content: `<section>
                    <h1>This is a simple title</h1>
                    <div>This is just Lorem Ipsum: Lorem the fuckin' ipsum dude...</div>
                    <section>
                  `,
          },
          {
            id: "text",
            label: "Text",
            content: '<div data-gjs-type="text">Insert some text here</div>',
          },
          {
            id: "image",
            label: "Image",
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
    editor.Commands.add("set-device-mobile", {
      run: (editor) => editor.setDevice("Mobile"),
    });
  }
  render() {
    return (
      <div className="flex w-full" style={{ height: '100vh' }}>
        <div className="panel__left border-r-2 border-slate-800">
          <div className="btn-ghost rounded-lg border-0 p-3 text-center transition ease-out hover:ease-in">
            <p className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-3xl font-black text-transparent selection:bg-transparent">
              <a href="/">V</a>
            </p>
          </div>
          <div className="divider"></div>
          <div className="panel__basic-actions"></div>
          <div className="divider"></div>
          <div className="panel__switcher"></div>
        </div>
        <div className="flex flex-col w-full">
          <div className="panel__top border-b-2 border-slate-800">
            <div className="panel__devices"></div>
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
