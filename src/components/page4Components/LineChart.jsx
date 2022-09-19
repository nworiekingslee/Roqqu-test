import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import { CoinData } from "../../Data";

const LineChart = ({ coin }) => {
  const [chartData, setChartData] = useState({
    labels: CoinData.map((data) => data.year),
    datasets: [
      {
        label: `${coin} / NGN: 26,792,926.87`,
        data: CoinData.map((data) => data.coinValue),
        backgroundColor: ["#90C27B"],
        borderColor: "#90C27B",
      },
    ],
  });
  return (
    <div className="chart-wrapper">
      {/* Couldn't find APIs to send requests to on the test brief, 
      so I created a dummy data and rendered on the chart */}
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
