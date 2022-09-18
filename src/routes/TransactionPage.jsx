import TransactionDashboard from "../components/page4Components/TransactionDashboard";
import ChartContainer from "../components/page4Components/ChartContainer";

// css import
import "../styles/TransactionPage.css";
import OrderBook from "../components/page4Components/OrderBook";

const TransactionPage = (props) => {
  const coin = props.match.params.coin;

  return (
    <div className="single-col container">
      <TransactionDashboard coin={coin} />

      <div className="grid-container">
        <ChartContainer coin={coin} />
        <OrderBook />
      </div>
    </div>
  );
};

export default TransactionPage;
