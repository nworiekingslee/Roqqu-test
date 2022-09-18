import TransactionDashboard from "../components/TransactionDashboard";

// css import
import "../styles/TransactionPage.css";

const TransactionPage = (props) => {
  const coin = props.match.params.coin;

  return (
    <div className="single-col container">
      <TransactionDashboard coin={coin} />

      <div className="grid-container ">
        <div className="red"></div>
        <div className="red"></div>
      </div>
    </div>
  );
};

export default TransactionPage;
