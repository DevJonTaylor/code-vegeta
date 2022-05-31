const basicActions = [
  {
    id: "visibility", // id field required
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
  // {
  //   id: "vegeta",
  //   className: "sidebar-icon group",
  //   label: `
  //       <svg style="width:24px;height:24px" viewBox="0 0 24 24">
  //         <path fill="currentColor" d="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3M19 19H5V5H16.17L19 7.83V19M12 12C10.34 12 9 13.34 9 15S10.34 18 12 18 15 16.66 15 15 13.66 12 12 12M6 6H15V10H6V6Z" />
  //       </svg>
  //   `,
  //   command: "vegeta",
  //   attributes: {
  //     "data-tip": "Save to database",
  //   },
  // },
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
];

export default basicActions;