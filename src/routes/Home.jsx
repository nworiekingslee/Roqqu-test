import CryptoContainer from "../components/CryptoContainer";
import HomeHero from "../components/HomeHero";
import Subnav from "../components/Subnav";
import SideContent from "../components/SideContent";

// css import
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="grid-container">
      <div>
        <HomeHero />
        <Subnav />
        <CryptoContainer />
      </div>
      <div>
        {" "}
        <SideContent />
      </div>
    </div>
  );
};

export default Home;
