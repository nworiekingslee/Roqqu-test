// icons import
import heroImage from "../../images/hero-illustration.svg";
import arrowRight from "../../images/arrow_right.svg";

const HomeHero = () => {
  return (
    <div className="hero">
      <div>
        <p className="date">JANUARY 2, 2022</p>
        <h1>Welcome to Roqqu's Decentralized Exchange</h1>
        <p>
          With an easy-to-use interface, we provide industry-leading security
          and deep liquidity
        </p>
        <button>
          <span>Learn More </span>
          <img src={arrowRight} alt="" />
        </button>
      </div>
      <img src={heroImage} alt="" />
    </div>
  );
};

export default HomeHero;
