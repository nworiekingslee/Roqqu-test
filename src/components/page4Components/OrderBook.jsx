import OrderEntry from "./OrderEntry";
import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderBook = ({ coin }) => {
  // const coin = props.coin.toLowerCase();

  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.binance.com/api/v3/depth?symbol=${coin}USDT&limit=6`)
      .then((resp) => {
        setOrderHistory(resp.data);
      });
  }, [orderHistory]);

  return (
    <div className="order-book">
      <p className="order-header">Order Book</p>
      <div
        style={{
          backgroundColor: "var(--background)",
        }}
      >
        <table className="bear">
          <thead>
            <tr>
              <th>PRICE(USDT)</th>
              <th>AMOUNT({coin})</th>
              <th>TOTAL (USDT)</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.bids?.map((order) => (
              <OrderEntry
                key={order[0] * order[1]}
                priceUsdt={order[0]}
                amount={order[1]}
                total={order[0] * order[1]}
                //not sure how depth is calculated, this is a placeholder, its indicator might appear too long for eth and bnb
                depth={(order[0] * order[1]) / order[0]}
              />
            ))}
          </tbody>
        </table>
        <div className="current-price">128299.304781 USDT</div>

        <table className="bull">
          <thead style={{ display: "none" }}>
            <tr>
              <th>PRICE(USDT)</th>
              <th>AMOUNT({coin})</th>
              <th>TOTAL (USDT)</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.bids?.map((order) => (
              <OrderEntry
                key={order[0] * order[1]}
                priceUsdt={order[0]}
                amount={order[1]}
                total={order[0] * order[1]}
                //not sure how depth is calculated, this is a placeholder, its indicator might appear too long for eth and bnb
                depth={(order[0] * order[1]) / order[0]}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderBook;
