import grapesjs from "grapesjs";
import panels from "./panels";
import blockManager from "./blockManager";
import plugins from "./plugins/index";
import pluginsOpts from "./plugins/options";
import storageManager from "./storageManager";
import styleManager from "./styleManager";
import deviceManager from "./deviceManager";

const editorConfig = () => {
  const editor = grapesjs.init({
    container: "#gjs",
    fromElement: true,
    height: "100%",
    width: "auto",
    canvas: {
      // TEMPLATES
      styles: [
        "https://laszlo-ratesic.github.io/run-buddy/assets/css/style.css",
      ],
    },
    plugins: plugins,
    pluginsOpts: pluginsOpts,
    // storageManager: false,
    // Enables progress to be saved to localStorage
    storageManager: storageManager,
    panels: panels,

    // MANAGERS
    blockManager: blockManager,
    layerManager: {
      appendTo: ".layers-container",
    },
    selectorManager: {
      appendTo: ".styles-container",
    },
    styleManager: styleManager,
    deviceManager: deviceManager,
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

  editor.on("run", () => {
    updateBtn();
  });
  updateBtn();
};

export default editorConfig;
