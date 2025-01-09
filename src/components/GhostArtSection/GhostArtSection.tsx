import React from "react";
import ghostArtImage from "../../assets/ghost-art1.png";
import lines from "../../assets/DigiArt2.png";

import "./GhostArtSection.css";

function GhostArtSection() {
  return (
    <div className="ghost-art-section">
      <div className="content">
        {/* Wavy line icon */}
        <div className="wavy-icon">
          <img src={lines} alt="lines" />
        </div>

        {/* Heading */}
        <h2 className="heading">
          Check Out <br />
          <span className="highlight">Our Ghost Art Collections</span>
        </h2>

        {/* Description */}
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
          maecenas blandit at faucibus augue gravida.
        </p>

        {/* Button */}
        <button className="view-more-btn">
          View More <span className="icon">🎨</span>
        </button>
      </div>

      {/* Image */}
      <div className="image-container">
        <img src={ghostArtImage} alt="Ghost Art" className="ghost-art-image" />
      </div>
    </div>
  );
}

export default GhostArtSection;
