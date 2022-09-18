// icons import
import caretDown from "../../images/caret_down.svg";

const Subnav = () => {
  return (
    <div className="sub-nav">
      <div className="sub-nav-group">
        <p className="active">Core Assets</p>
        <p>Top Gainers</p>
        <p>Top Losers</p>
        <p>New</p>
      </div>
      <span>
        <p>Market Cap</p> <img src={caretDown} alt="" />
      </span>
    </div>
  );
};

export default Subnav;
