import "./index.css";

const Loader = () => (
  <div class="loader">
    <svg class="circular">
      <circle
        class="path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="5"
        strokeMiterlimit="10"
      ></circle>
    </svg>
  </div>
);

export default Loader;
