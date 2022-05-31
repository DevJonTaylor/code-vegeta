import basicActions from './basicActions.js';
import panelSwitcher from './panelSwitcher.js';

const panels = {
  defaults: [
    {
      id: "panel-top",
      el: ".panel__top",
    },
    // Sidebar panel buttons
    {
        id: "basic-actions",
        el: ".panel__basic-actions",
        buttons: basicActions,
    },
    {
      id: "layers",
      el: ".panel__right",
      resizable: {
        maxDim: 500,
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
      buttons: panelSwitcher,
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
};

export default panels;