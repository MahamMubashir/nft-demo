import "./RoadMap.css";
import lines from "../../assets/DigiArt2.png";

function RoadMap() {
  return (
    <div className="roadmap">
      {/* Section Header */}
      <div className="roadmap-header">
        <img src={lines} alt="lines" />

        <h1>
          <span className="highlight">The</span> Road Map
        </h1>
      </div>

      {/* Roadmap Timeline */}
      <div className="roadmap-timeline">
        {/* Example Milestone 1 */}
        <div className="roadmap-item">
          <div className="roadmap-circle">
            <span className="roadmap-number">01</span>
          </div>
          <div className="roadmap-content">
            <div className="roadmap-date">
              <span>JAN</span> 2024
            </div>
            <div className="h3-span-div">
              <h3>Launch</h3>
              <span className="roadmap-progress">25%</span>
            </div>

            <p>
              Quality is a First. Then we are planning the best services
              provided.
            </p>
          </div>
        </div>

        {/* Example Milestone 2 */}
        <div className="roadmap-item">
          <div className="roadmap-circle">
            <span className="roadmap-number">02</span>
          </div>
          <div className="roadmap-content">
            <div className="roadmap-date">
              <span>APRIL</span> 2024
            </div>
            <div className="h3-span-div">
              <h3>Production</h3>
              <span className="roadmap-progress">35%</span>
            </div>
            <p>
              Quality is a First. Then we are planning the best services
              provided.
            </p>
          </div>
        </div>

        {/* Example Milestone 3 */}
        <div className="roadmap-item">
          <div className="roadmap-circle">
            <span className="roadmap-number">03</span>
          </div>
          <div className="roadmap-content">
            <div className="roadmap-date">
              <span>JUNE</span> 2024
            </div>

            <div className="h3-span-div">
              <h3>Minting</h3>
              <span className="roadmap-progress">50%</span>
            </div>
            <p>
              Quality is a First. Then we are planning the best services
              provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
