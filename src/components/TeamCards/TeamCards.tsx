import React from "react";
import "./TeamCards.css";

import avatar1 from "../../assets/nft1-1.png";
import avatar2 from "../../assets/nft2-2.png";
import avatar3 from "../../assets/nft3-3.png";
import lines from "../../assets/DigiArt2.png";

const teamData = [
  {
    image: avatar1,
    name: "Annette Black",
    role: "Animator",
    socials: {
      facebook: "Fb",
      twitter: "Tw",
      behance: "Bh",
      linkedin: "In",
    },
  },
  {
    image: avatar2,
    name: "Esther Howard",
    role: "Artist",
    socials: {
      facebook: "Fb",
      twitter: "Tw",
      behance: "Bh",
      linkedin: "In",
    },
  },
  {
    image: avatar3,
    name: "Josh Hart",
    role: "Artist",
    socials: {
      facebook: "Fb",
      twitter: "Tw",
      behance: "Bh",
      linkedin: "In",
    },
  },
];

function TeamCards() {
  return (
    <div className="team-cards-container">
      <div className="roadmap-header">
        <img src={lines} alt="lines" />
        <h1>
          <span className="highlight">Our</span> Team
        </h1>
      </div>

      <div className="cards-wrapper">
        {teamData.map((member, index) => (
          <div key={index} className="card">
            <div className="image-container">
              <img
                src={member.image}
                alt={member.name}
                className="card-image"
              />
            </div>
            <div className="card-content">
              <h3 className="card-name">{member.name}</h3>
              <p className="card-role">{member.role}</p>
              <div className="card-socials">
                {Object.values(member.socials).map((social, i) => (
                  <span key={i} className="social-link">
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCards;
