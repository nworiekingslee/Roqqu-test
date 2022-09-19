import TransactionDashboard from "../components/page4Components/TransactionDashboard";
import ChartContainer from "../components/page4Components/ChartContainer";

// css import
import "../styles/TransactionPage.css";
import OrderBook from "../components/page4Components/OrderBook";
import { useEffect } from "react";

const TransactionPage = (props) => {
  const coin = props.match.params.coin;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="single-col container">
      <TransactionDashboard coin={coin} />

      <div className="grid-container">
        <ChartContainer coin={coin} />
        <div>
          <OrderBook coin={coin} />
        </div>
      </div>

      {/* The items beneath these components 
      on the design are not very visible */}
    </div>
  );
};

export default TransactionPage;
