import star from "../../assets/baner1.png";
import lines from "../../assets/banner2.png";
import nft from "../../assets/banner3.png";
import rocket from "../../assets/banner4.png";
import elain from "../../assets/BannerEalain.png";

import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      {/* Part 1: Ealain Logo */}
      <div className="banner-logo">
        <img src={elain} alt="Ealain Logo" />
      </div>

      {/* Part 2: Heading and Content */}
      <div className="banner-content">
        <div className="banner-heading">
          CREATE <span className="highlight">NFT'S</span> OF{" "}
          <span className="highlight">ART</span>
        </div>
        <p className="banner-subtitle">NEW JOURNEY WITH 9,999 NFTs</p>
        <p className="banner-description">
          First NFT utility project for Developers and Designers based on
        </p>
        <div className="banner-buttons">
          <button className="btn btn-primary">MINT NOW 🌟</button>
          <button className="btn btn-secondary">JOIN US 🚀</button>
        </div>
      </div>

      {/* Part 3: Images */}
      <div className="banner-images">
        <img src={star} alt="Star Icon" className="star-icon" />
        <img src={lines} alt="Lines Icon" className="lines-icon" />
        <div className="nft-rocket-div">
          <img src={nft} alt="NFT Character" className="nft-character" />
          <img src={rocket} alt="Rocket Icon" className="rocket-icon" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
