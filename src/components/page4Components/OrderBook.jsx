import OrderEntry from "./OrderEntry";
import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

const OrderBook = ({ coin }) => {
  // const coin = props.coin.toLowerCase();

  const [orderHistory, setOrderHistory] = useState([]);
  const chris = [
    {
      priceUsdt: "128299.304781",
      amount: "5.304781",
      total: "5.304781",
      depth: "90%",
    },
    {
      priceUsdt: "128299.304781",
      amount: "5.304781",
      total: "5.304781",
      depth: "80%",
    },
    {
      priceUsdt: "128299.304781",
      amount: "5.304781",
      total: "5.304781",
      depth: "68%",
    },
    {
      priceUsdt: "128299.304781",
      amount: "5.304781",
      total: "5.304781",
      depth: "40%",
    },
    {
      priceUsdt: "128299.304781",
      amount: "5.304781",
      total: "5.304781",
      depth: "22%",
    },
    {
      priceUsdt: "128299.304781",
      amount: "5.304781",
      total: "5.304781",
      depth: "45%",
    },
  ];

  useEffect(() => {
    const promise = axios
      .get(
        process.env.REACT_APP_BASE_ENDPOINT + `/api/v3/depth?symbol=${coin}USDT`
      )
      .then((resp) => {
        console.log(resp.data);
        setOrderHistory(resp.data);
      });
  }, [orderHistory]);

  return (
    <div className="order-book">
      <p className="order-header">Order Book</p>
      <div>
        <div
          style={{
            height: 300,
            backgroundColor: "var(--background)",
            overflow: "scroll",
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
                  priceUsdt={order[0]}
                  amount={order[1]}
                  total={`hardvalue ${order[0]}`}
                  depth={order.depth}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="current-price">128299.304781 USDT</div>
        <div
          style={{
            height: 260,
            backgroundColor: "var(--background)",
            overflow: "hidden",
          }}
        >
          <table className="bull">
            {orderHistory.asks?.map((order) => (
              <OrderEntry
                priceUsdt={order[0]}
                amount={order[1]}
                total={`hardvalue ${order[0]}`}
                depth={order.depth}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
