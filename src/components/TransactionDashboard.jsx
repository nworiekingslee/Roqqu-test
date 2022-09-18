// icon imports
import btc from "../images/btc-logo.svg";

const TransactionDashboard = ({ coin }) => {
  return (
    <div className="dashboard">
      <div className="dasboard-first-item">
        <img src={btc} alt="" />
        <div>
          <p>{coin} /USDT</p> <p className="text-xs">Bitcoin</p>
        </div>
      </div>

      <div className="dasboard-item">
        <p className="text-xs">Last Price</p>{" "}
        <p className="text-highlight">18372.99 USDT</p>
      </div>

      <div className="dasboard-item">
        <p className="text-xs">High</p> <p>18372.99 USDT</p>
      </div>

      <div className="dasboard-item">
        <p className="text-xs">Low</p> <p>18372.99 USDT</p>
      </div>

      <div className="dasboard-item">
        <p className="text-xs">Volume</p> <p>18372.99 USDT</p>
      </div>

      <div className="dasboard-item">
        <p className="text-xs">24h Change</p>{" "}
        <p className="text-highlight">+3.04%</p>
      </div>
    </div>
  );
};

export default TransactionDashboard;
