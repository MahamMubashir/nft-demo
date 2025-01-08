import "./App.css";
import Header from "./components/Header/Header";
import Rating from "./components/Rating/Rating";
import Banner from "./components/Banner/Banner";
import DigitalArt from "./components/DigitalArt/DigitalArt";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Banner />
      <Rating />
      <DigitalArt />
    </div>
  );
}

export default App;
