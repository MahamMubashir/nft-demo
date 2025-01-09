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
      {/* <RoadMap /> */}
      <Minting />
    </div>
  );
}

export default App;
