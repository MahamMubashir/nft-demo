import "./RoadMap.css";

function RoadMap() {
  return (
    <div className="unique-collection">
      {/* Section Header */}
      <div className="collection-header">
        <h2>
          The <span className="highlight">Unique Collection</span>
        </h2>
        <p>Explore rare and exclusive NFTs</p>
      </div>

      {/* Collection Cards */}
      <div className="collection-cards">
        {/* Example Card 1 */}
        <div className="card">
          <div className="card-icon">
            <img src="path/to/icon1.png" alt="Icon 1" />
          </div>
          <h3>Artwork 1</h3>
          <p>High-quality, one-of-a-kind NFT</p>
        </div>

        {/* Example Card 2 */}
        <div className="card">
          <div className="card-icon">
            <img src="path/to/icon2.png" alt="Icon 2" />
          </div>
          <h3>Artwork 2</h3>
          <p>Limited-edition masterpiece</p>
        </div>

        {/* Example Card 3 */}
        <div className="card">
          <div className="card-icon">
            <img src="path/to/icon3.png" alt="Icon 3" />
          </div>
          <h3>Artwork 3</h3>
          <p>Digital art with a story</p>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
