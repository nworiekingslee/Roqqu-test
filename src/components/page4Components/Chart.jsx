import React, { useState, useEffect, useRef, useCallback } from "react";
import useWebSocket from "react-use-websocket";
import axios from "axios";
import { createChart, CrosshairMode } from "lightweight-charts";

const Chart = (props) => {
  const coin = props.coin.toLowerCase();

  const [socketUrl, setSocketurl] = useState(
    `wss://stream.binance.com:9443/ws/${coin}usdt@kline_3m`
  );
  const [coinHistory, setCoinHistory] = useState([]);
  const { lastMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      const modifiedMsg = JSON.parse(lastMessage.data);

      // var d = new Date(1382086394000);
      const newData = {
        time: modifiedMsg.k.t / 1000,
        open: parseFloat(modifiedMsg.k.o),
        high: parseFloat(modifiedMsg.k.h),
        low: parseFloat(modifiedMsg.k.l),
        close: parseFloat(modifiedMsg.k.c),
      };

      setCoinHistory((prev) => prev.concat(newData));
      console.log(coinHistory, "newData");
    }
  }, [lastMessage, setCoinHistory]);

  const init = useCallback(() => {
    var chart = createChart(
      document.getElementById("chart1"),

      {
        height: 450,
        layout: {
          backgroundColor: "#04091C",
          textColor: "rgba(255, 255, 255, 0.9)",
        },
        grid: {
          vertLines: {
            color: "#111A33",
          },
          horzLines: {
            color: "#111A33",
          },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        rightPriceScale: {
          borderColor: "rgba(197, 203, 206, 0.8)",
        },
        timeScale: {
          borderColor: "#04091C",
        },
      }
    );

    var candleSeries = chart.addCandlestickSeries({
      upColor: "#8CC176",
      downColor: "#B82C0D",
      borderUpColor: "#8CC176",
      borderDownColor: "#B82C0D",
      wickUpColor: "#8CC176",
      wickDownColor: "#B82C0D",
    });

    axios
      .get(
        `https://api.binance.com/api/v3/klines?symbol=${props.coin}USDT&interval=5m&limit=500`
      )
      .then((resp) => {
        candleSeries.setData(processKData(resp.data));
      });
  }, []);

  useEffect(() => {
    if (document.getElementById("chart1").firstChild === null) {
      init();
      console.log("m-Loaded");
    }
  }, []);

  const processKData = (arr) => {
    const newArr = arr.map((data) => {
      return {
        time: data[0] / 1000,
        open: parseFloat(data[1]),
        high: parseFloat(data[2]),
        low: parseFloat(data[3]),
        close: parseFloat(data[4]),
      };
    });

    return newArr;
  };

  return (
    <>
      <div className="chart-wrapper" id="chart1" style={{ height: 500 }}></div>
      <h2 style={{ marginTop: "2rem" }}>Web socket Data</h2>
      {coinHistory.map((data, idx) => (
        <ul style={{ margin: "1rem" }}>
          <li key={idx}>
            {data ? (
              <p>
                Price: {data.high}, time: {data.time}
              </p>
            ) : null}
          </li>
        </ul>
      ))}
    </>
  );
};

export default Chart;
