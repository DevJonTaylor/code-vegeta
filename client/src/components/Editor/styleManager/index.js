const styleManager = {
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
};

export default styleManager;
