import OrderEntry from "./OrderEntry";

const OrderBook = ({ coin }) => {
  const orderHistory = [
    {
      priceUsdt: "128299.304781",
      amount: "5.304781",
      total: "5.304781",
      percentageWidth: "90%",
    },
    {
      priceUsdt: "128299.304781",
      amount: "5.304781",
      total: "5.304781",
      percentageWidth: "80%",
    },
    {
      priceUsdt: "128299.304781",
      amount: "5.304781",
      total: "5.304781",
      percentageWidth: "68%",
    },
    {
      priceUsdt: "128299.304781",
      amount: "5.304781",
      total: "5.304781",
      percentageWidth: "40%",
    },
    {
      priceUsdt: "128299.304781",
      amount: "5.304781",
      total: "5.304781",
      percentageWidth: "22%",
    },
    {
      priceUsdt: "128299.304781",
      amount: "5.304781",
      total: "5.304781",
      percentageWidth: "45%",
    },
  ];
  return (
    <div className="order-book">
      <p className="order-header">Order Book</p>
      <div>
        <table className="bear">
          <tr>
            <th>PRICE(USDT)</th>
            <th>AMOUNT({coin})</th>
            <th>TOTAL (USDT)</th>
          </tr>
          {orderHistory.map((order) => (
            <OrderEntry
              priceUsdt={order.priceUsdt}
              amount={order.amount}
              total={order.total}
              percentageWidth={order.percentageWidth}
            />
          ))}
        </table>
        <div className="current-price">128299.304781 USDT</div>
        <table className="bull">
          {orderHistory.map((order) => (
            <OrderEntry
              priceUsdt={order.priceUsdt}
              amount={order.amount}
              total={order.total}
              percentageWidth={order.percentageWidth}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default OrderBook;
