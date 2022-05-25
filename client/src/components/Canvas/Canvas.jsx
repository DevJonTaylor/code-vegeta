import React from "react";
import "grapesjs/dist/css/grapes.min.css";
import "./index.css";
import grapesjs from "grapesjs";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: true,
      height: "300px",
      width: "80vw",
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
                label: "Grid",
                command: "sw-visibility", // built-in command
              },
              {
                id: "export",
                className: "btn btn-ghost btn-open-export",
                label: "Export",
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
                label: "Layers",
                command: "show-layers",
                attributes: { class: "btn btn-ghost" },
                // Once actived disable the possibility to turn it off
                togglable: false,
              },
              {
                id: "show-style",
                active: true,
                label: "Styles",
                attributes: { class: "btn btn-ghost" },
                command: "show-styles",
                togglable: false,
              },
              {
                id: "show-traits",
                active: true,
                label: "Traits",
                attributes: { class: "btn btn-ghost" },
                command: "show-traits",
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
                label: "D",
                command: "set-device-desktop",
                className: 'btn btn-ghost',
                active: true,
                togglable: false,
              },
              {
                id: "device-mobile",
                label: "M",
                className: 'btn btn ghost',
                command: "set-device-mobile",
                togglable: false,
              },
            ],
          },
        ],
      },
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
      traitManager: {
        appendTo: ".traits-container",
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

    editor.Commands.add("show-traits", {
      getRowEl(editor) {
        return editor.getContainer().closest(".editor-row");
      },
      getTraitsEl(row) {
        return row.querySelector(".traits-container");
      },
      run(editor, sender) {
        const trEl = this.getTraitsEl(this.getRowEl(editor));
        trEl.style.display = "";
      },
      stop(editor, sender) {
        const trEl = this.getTraitsEl(this.getRowEl(editor));
        trEl.style.display = "none";
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
      <div className="flex flex-col">
        <div className="panel__top">
          <div className="panel__basic-actions"></div>
          <div className="panel__devices"></div>
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
            <div className="traits-container"></div>
          </div>
        </div>
        <div id="blocks" style={{ width: "80vw" }}></div>
      </div>
    );
  }
}

export default Canvas;
