import "./Rating.css";
import RatingStar from "../../assets/rating1.png";
import lines from "../../assets/banner2.png";

function Rating() {
  return (
    <>
      <div className="rating-block">
        <div className="lines">
          <img src={lines} alt="Cart" />
        </div>
        <div className="rating-row">
          <div className="rating">
            <div className="rating-star">
              <img src={RatingStar} alt="Cart" />
              <div className="rating-number">125+</div>
            </div>
            <div className="rating-text nft-text">NFTs Sold</div>
          </div>
          <div className="rating">
            <div className="rating-star">
              <img src={RatingStar} alt="Cart" />
              <div className="rating-number">61+</div>
            </div>
            <div className="rating-text client-text">Happy Clients</div>
          </div>
          <div className="rating">
            <div className="rating-star">
              <img src={RatingStar} alt="Cart" />
              <div className="rating-number">153+</div>
            </div>
            <div className="rating-text featured-text">Featured NFTs</div>
          </div>
          <div className="rating">
            <div className="rating-star">
              <img src={RatingStar} alt="Cart" />
              <div className="rating-number">15+</div>
            </div>
            <div className="rating-text renowned-text">Renowned Awards</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rating;
