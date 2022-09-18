// icon imports
import up from "../../images/up.svg";
import down from "../../images/down.svg";
import exchange from "../../images/switch.svg";

const SideContent = () => {
  return (
    <div className="side-container">
      <div
        style={{
          backgroundColor: "var(--background)",
          borderRadius: 8,
          padding: 24,
        }}
      >
        <p className="mb-2 text-xs">WALLET BALANCE</p>

        <div
          className="mb-2"
          style={{
            textAlign: "center",
          }}
        >
          <span className="crypto-badge">BTC</span>
          <h2 className="crypto-price">0.2993029</h2>
          <p className="crypto-price-in-usd">3,700 USD</p>
          <button>Withdraw</button>
        </div>
      </div>

      {/* Activity */}

      <p className="h-2 mb-2">Latest Activities</p>

      <div className="activity-container">
        <div style={{ display: "flex" }}>
          <span className="icon-container">
            <img src={up} alt="up" />
          </span>
          <div className="activity-body">
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Withdrew USDT</p>
            <p style={{ color: "var(--success)" }}>Complete</p>
            <p style={{ color: "var(--link)" }}>992333.93USDT</p>
          </div>
        </div>

        <p className="date">Dec 31, 2021</p>
      </div>

      <div className="activity-container">
        <div style={{ display: "flex" }}>
          <span className="icon-container">
            <img src={exchange} alt="up" />
          </span>
          <div className="activity-body">
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Exchanged BTC</p>
            <p style={{ color: "var(--success)" }}>Complete</p>
            <p style={{ color: "var(--link)" }}>992333.93USDT</p>
          </div>
        </div>

        <p className="date">Dec 31, 2021</p>
      </div>

      <div className="activity-container">
        <div style={{ display: "flex" }}>
          <span className="icon-container">
            <img src={down} alt="up" />
          </span>
          <div className="activity-body">
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Deposit ETH</p>
            <p style={{ color: "var(--success)" }}>Complete</p>
            <p style={{ color: "var(--link)" }}>992333.93USDT</p>
          </div>
        </div>

        <p className="date">Dec 31, 2021</p>
      </div>
    </div>
  );
};

export default SideContent;
