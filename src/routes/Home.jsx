import HomeHero from "../components/HomeHero";
import Subnav from "../components/Subnav";

// css import
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="grid-container">
      <div>
        <HomeHero />
        <Subnav />
      </div>
      <div>The far right</div>
    </div>
  );
};

export default Home;
