import "./Faq.css";
import lines from "../../assets/DigiArt2.png";
import Bird from "../../assets/faq-Bird2.png";

function Faq() {
  return (
    <div className="faq-container">
      <div className="faq-image">
        <img src={lines} alt="lines" />
        <div className="faq-header">
          <h2>
            What <span className="highlight">Frequently Asked Questions</span>
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo at
            in aliquet dignissim arcu habitasse.
          </p>
        </div>
        <img
          src={Bird} // Replace with your image source
          alt="FAQ Illustration"
          className="bird-img"
        />
      </div>
      <div className="faq-content-right">
        <div className="faq-items">
          <div className="faq-item">
            <h3>01</h3>
            <div className="faq-content">
              <h4>
                Advice I Should Have Listened To Starting Out As An Artist?
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                at in aliquet dignissim arcu habitasse.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <h3>02</h3>
            <div className="faq-content">
              <h4>My Favorite Podcasts To Listen To While Making NFTs.</h4>
            </div>
          </div>
          <div className="faq-item">
            <h3>03</h3>
            <div className="faq-content">
              <h4>How To Keep Fear From Ruining Your Art Business</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
