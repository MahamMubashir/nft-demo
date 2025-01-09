import React from "react";
import "./NftCards.css";

import image1 from "../../assets/nft1.png";
import image2 from "../../assets/nft2.png";
import image3 from "../../assets/nft3.png";

const nftData = [
  {
    image: image1,
    title: "Do NFT's Assets For Your Next Plan",
    date: "Dec 17, 2024",
    author: "Admin",
  },
  {
    image: image2,
    title: "How to Process of Buying NFT's",
    date: "Dec 17, 2024",
    author: "Admin",
  },
  {
    image: image3,
    title: "Sell NFT's Process of Cash Pay",
    date: "Dec 17, 2024",
    author: "Admin",
  },
];

function NftCards() {
  return (
    <div className="nft-cards-container">
      {nftData.map((nft, index) => (
        <div key={index} className="card">
          <img src={nft.image} alt={nft.title} className="card-image" />
          <div className="card-content">
            <p className="card-meta">
              {nft.date} — By {nft.author}
            </p>
            <h3 className="card-title">{nft.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NftCards;
