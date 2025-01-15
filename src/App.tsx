import "./App.css";
import Header from "./components/Header/Header";
import Rating from "./components/Rating/Rating";
import Banner from "./components/Banner/Banner";
import DigitalArt from "./components/DigitalArt/DigitalArt";
import UniqueCollection from "./components/UniqueCollection/UniqueCollection";
import GhostArtSection from "./components/GhostArtSection/GhostArtSection";
import NftCards from "./components/NftCards/NftCards";
import RoadMap from "./components/RoadMap/RoadMap";
import Minting from "./components/Minting/Minting";
import TeamCards from "./components/TeamCards/TeamCards";
import Faq from "./components/Faq/Faq";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import StayInTouch from "./components/StayInTouch/StayInTouch";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Banner />
      <Rating />
      <DigitalArt />
      <UniqueCollection />
      <GhostArtSection />
      <NftCards />
      <RoadMap />
      <Minting />
      <TeamCards />
      <Faq />
      <PartnersSection />
      <StayInTouch />
      <Footer />
    </div>
  );
}

export default App;
