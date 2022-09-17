import HomeHero from "../components/HomeHero";

// css import
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="grid-container">
      <div>
        <HomeHero />
      </div>
      <div>The far right</div>
    </div>
  );
};

export default Home;
