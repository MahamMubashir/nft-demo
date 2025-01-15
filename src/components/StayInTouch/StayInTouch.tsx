import "./StayInTouch.css";
import illustration from "../../assets/StayInTouch1.png";
import birdIcon from "../../assets/StayInTouch2.png";

function StayInTouch() {
  return (
    <div className="stay-in-touch-container">
      <div className="text-section">
        <h2>
          Let’s Stay <span className="highlight">In Touch</span>
          <img src={birdIcon} alt="Bird Icon" className="bird-icon" />
        </h2>
        <button className="read-more-button">READ MORE</button>
      </div>
      <div className="image-section">
        <img
          src={illustration}
          alt="Digital Art Illustration"
          className="main-illustration"
        />
        <div className="contact-info">
          <h3>Digital Art, Brand Identity, Illustration Art, CGI Animation</h3>
          <p>contact@ealain.com</p>
          <p>(239) 555-0108</p>
        </div>
      </div>
    </div>
  );
}

export default StayInTouch;
