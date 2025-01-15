import "./DigitalArt.css";
import BigNft from "../../assets/DigiArt1.png";
import lines from "../../assets/DigiArt2.png";
import RatingStar from "../../assets/DigiArtStarIcon3.png";
import Fish from "../../assets/fish.png";

function DigitalArt() {
  return (
    <>
      <div className="digital-art-block">
        <div className="digital-art-description">
          <img src={lines} alt="lines" />
          <div className="digital-art-content">
            <h1 className="digital-art-heading">
              DIGITAL <span className="highlight">ART</span>
            </h1>
            <p className="digital-art-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi
              diam amet nunc sem. Lobortis fringilla{" "}
            </p>
            <div className="digital-art-buttons">
              <button className="btn btn-primary">
                VIEW ALL <img src={Fish} />
              </button>
            </div>
          </div>
        </div>
        <div className="digital-art-image">
          <img src={BigNft} alt="Cart" />
        </div>
        <div className="digital-art-divs">
          <div className="digital-art-div">
            <img src={RatingStar} alt="Cart" />
            <div className="digital-art-div-text">3D Computer Graphics</div>
          </div>
          <div className="digital-art-div">
            <img src={RatingStar} alt="Cart" />
            <div className="digital-art-div-text">Pixel Art</div>
          </div>
          <div className="digital-art-div">
            <img src={RatingStar} alt="Cart" />
            <div className="digital-art-div-text">Digital Photograph</div>
          </div>
          <div className="digital-art-div">
            <img src={RatingStar} alt="Cart" />
            <div className="digital-art-div-text">Photo- Painting</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DigitalArt;
