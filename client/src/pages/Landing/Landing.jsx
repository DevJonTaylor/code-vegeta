import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Landing = () => {
  return (
    <div className="relative">
      <div className="background-image">
        <div className="moon-border">
          <div className="scrolling-image"></div>
        </div>
      </div>

      <div className="landing-page">
        <div className="welcome-text-left text-neutral">
          <h2 className="landing-subheader">CODE YOUR OWN WEBSITE</h2>
          <h1 className="landing-header">WITHOUT A KEYBOARD</h1>
          <p>Build your online presence with Vegeta.</p>
        </div>
        <div className="spacer-border"></div>
        <div className="welcome-text-right app-text">
          <Link to="/editor" className="welcome-btn text-primary bg-neutral">
            START BUILDING
          </Link>
          <Link to="/gallery" className="welcome-btn-2 text-primary bg-neutral">
            VIEW GALLERY
          </Link>
        </div>
        <div className="site-image-container">
          <div className="welcome-image">
            <div className="welcome-gif"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
