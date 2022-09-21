import OrderEntry from "./OrderEntry";
import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

const OrderBook = ({ coin }) => {
  const orderHistory = [
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

  // {"e":"kline",
  // "E":1663700068198,
  // "s":"BTCUSDT",
  // "k":
  //     {"t":1663700040000,
  //     "T":1663700219999,
  //     "s":"BTCUSDT",
  //     "i":"3m",
  //     "f":1849502104,
  //     "L":1849504063,
  //     "o":"18932.13000000",
  //     "c":"18945.08000000",
  //     "h":"18946.37000000",
  //     "l":"18931.27000000",
  //     "v":"128.92140000",
  //     "n":1960,
  //     "x":false,
  //     "q":"2441650.64343010",
  //     "V":"69.21793000",
  //     "Q":"1310970.72202140",
  //     "B":"0"}

  const [socketUrl, setSocketUrl] = useState();
  // "wss://stream.binance.com:9443/ws/btcusdt@trade"

  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      if (messageHistory.length > 5) {
        const newMessageHistory = messageHistory.slice(
          messageHistory.length - 5,
          messageHistory.length
        );
        setMessageHistory([...newMessageHistory, lastMessage]);
        console.log("message length", newMessageHistory.length);
      }

      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  if (lastMessage) {
    const data = messageHistory.map((item) => JSON.parse(item.data));

    console.log("data", data);
  }

  return (
    <div className="order-book">
      <p className="order-header">Order Book</p>
      <ul>
        {messageHistory.map((message, idx) => (
          <span key={idx}>{message ? message.data : null}</span>
        ))}
      </ul>
      {/* {lastMessage ? <span>Last message: {lastMessage.data}</span> : null} */}
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
              depth={order.depth}
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
              depth={order.depth}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default OrderBook;
