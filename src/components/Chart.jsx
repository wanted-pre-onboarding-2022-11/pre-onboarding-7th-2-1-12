import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

const Chart = ({ date, filterdData }) => {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels: date,
    datasets: filterdData.map((e) => {
      return {
        ...e,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      };
    }),
  };
  return <Line data={data} options={options} updateMode={"normal"} />;
};

export default Chart;
