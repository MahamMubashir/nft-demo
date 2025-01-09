import rocket from "../../assets/UniqueCollection1.png";
import fireball from "../../assets/UniqueCollection2.png";
import lines from "../../assets/DigiArt2.png";
import "./UniqueCollection.css";

function UniqueCollection() {
  return (
    <div className="unique-collection">
      {/* Left Rocket */}
      <img src={rocket} alt="Rocket" className="rocket-icon" />

      {/* Main Content */}
      <div className="unique-collection-content">
        <img src={lines} alt="lines" />
        <h2 className="unique-heading">
          <span className="highlight">We</span> Provide A Unique Collection
        </h2>
        <p className="unique-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo faucibus
          turpis vel lobortis sit adipiscing ac. Auctor vulputate eget pharetra.
        </p>
        <button className="unique-btn">
          Read More <span className="icon">🔊</span>
        </button>
      </div>

      {/* Right Fireball */}
      <img src={fireball} alt="Fireball" className="fireball-icon" />
    </div>
  );
}

export default UniqueCollection;
