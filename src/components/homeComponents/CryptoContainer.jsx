import { Link } from "react-router-dom";

// icon impor0t
import btc from "../../images/btc-logo.svg";
import eth from "../../images/eth-logo.svg";
import bnb from "../../images/bnb-logo.svg";
import tetherUsdt from "../../images/tether-usdt-logo.svg";

const CryptoContainer = () => {
  return (
    <div className="crypto-container">
      <Link
        to="/BTC"
        style={{ textDecoration: "none", color: "var(--white)" }}
        className="crypto-component"
      >
        <div className="crypto-details">
          <img src={btc} alt="btc" />
          <div>
            <p className="bold-text">Bitcoin</p>
            <p>BTC</p>
          </div>
        </div>
        <div>
          <p className="bold-text">54372.94 USD</p>{" "}
          <p className="crypto-growth">+2.43%</p>
        </div>
      </Link>

      <Link
        to="/USDT"
        style={{ textDecoration: "none", color: "var(--white)" }}
        className="crypto-component"
      >
        <div className="crypto-details">
          <img src={tetherUsdt} alt="btc" />
          <div>
            <p className="bold-text">Tether</p>
            <p>USDT</p>
          </div>
        </div>
        <div>
          <p className="bold-text">1.02 USD</p>{" "}
          <p className="crypto-growth">+2.43%</p>
        </div>
      </Link>

      <Link
        to="/ETH"
        style={{ textDecoration: "none", color: "var(--white)" }}
        className="crypto-component"
      >
        <div className="crypto-details">
          <img src={eth} alt="btc" />
          <div>
            <p className="bold-text">Ethereum</p>
            <p>ETH</p>
          </div>
        </div>
        <div>
          <p className="bold-text">54372.94 USD</p>{" "}
          <p className="crypto-growth">+2.43%</p>
        </div>
      </Link>

      <Link
        to="/BNB"
        style={{ textDecoration: "none", color: "var(--white)" }}
        className="crypto-component"
      >
        <div className="crypto-details">
          <img src={bnb} alt="btc" />
          <div>
            <p className="bold-text">Binance Coin</p>
            <p>BNB</p>
          </div>
        </div>
        <div>
          <p className="bold-text">54372.94USD</p>{" "}
          <p className="crypto-growth">+2.43%</p>
        </div>
      </Link>
    </div>
  );
};

export default CryptoContainer;
