const blocks = [
  {
    id: "section", // id field is required!
    category: "Text",
    label: `
                <div class="flex flex-col items-center">
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4,5H20V7H4V5M4,9H20V11H4V9M4,13H20V15H4V13M4,17H14V19H4V17Z" />
                  </svg>
                  <br/>
                  SECTION
                </div>
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
    category: "Text",
    label: `
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4,9H20V11H4V9M4,13H14V15H4V13Z" />
                </svg>
                <br/>
                TEXT
                `,
    content: '<div data-gjs-type="text">Insert some text here</div>',
  },
  {
    id: "image",
    category: "Extra",
    label: `
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M6,20H15L18,20V12L14,16L12,14L6,20M8,9A2,2 0 0,0 6,11A2,2 0 0,0 8,13A2,2 0 0,0 10,11A2,2 0 0,0 8,9Z" />
                </svg>
                <br/>
                IMAGE
                `,
    select: true, // select the component when dropped
    content: { type: "image" }, // can pass components as JSON (notice use of defined component type 'image')
    activate: true, // triggers 'active' event on component when dropped and 'image' reacts by opening asset manager
  },
  {
    id: "link",
    category: "Text",
    label: `
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" />
                    </svg>
                    <br/>
                    LINK
                `,
    select: true,
    content: { type: "link" },
    activate: true,
  },
];

export default blocks;
