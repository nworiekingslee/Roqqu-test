import CryptoContainer from "../components/homeComponents/CryptoContainer";
import HomeHero from "../components/homeComponents/HomeHero";
import Subnav from "../components/homeComponents/Subnav";
import SideContent from "../components/homeComponents/SideContent";

// css import
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="grid-container container">
      <div>
        <HomeHero />
        <Subnav />
        <CryptoContainer />
      </div>
      <div>
        <SideContent />
      </div>
    </div>
  );
};

export default Home;
