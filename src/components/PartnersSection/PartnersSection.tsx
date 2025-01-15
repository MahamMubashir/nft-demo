import "./PartnersSection.css";
import lines from "../../assets/DigiArt2.png";
import img1 from "../../assets/officialpartner1.png";
import img2 from "../../assets/officialpartner2.png";
import img3 from "../../assets/officialpartner3.png";
import img4 from "../../assets/officialpartner4.png";

const partners = [
  {
    id: 1,
    category: "Fashion",
    name: "Heart Book",
    image: img1,
    description: "heartbook",
  },
  {
    id: 2,
    category: "Fashion",
    name: "Digital Book",
    image: img2,
    description: "digitalbook",
  },
  {
    id: 3,
    category: "Fashion",
    name: "The School Guide",
    image: img3,
    description: "schoolguide",
  },
  {
    id: 4,
    category: "Fashion",
    name: "The Kids Dream",
    image: img4,
    description: "kidsdream",
  },
];

function PartnersSection() {
  return (
    <div className="partners-container">
      <img src={lines} alt="lines" />

      <h2>
        Our <span className="highlight">Official Partners</span>
      </h2>
      <div className="partners-grid">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-card">
            <div className="partner-info">
              <p className="partner-category">{partner.category}</p>
              <img
                src={partner.image}
                alt={partner.name}
                className="partner-image"
              />
              <h4 className="partner-name">{partner.name}</h4>
              <p className="partner-description">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnersSection;
