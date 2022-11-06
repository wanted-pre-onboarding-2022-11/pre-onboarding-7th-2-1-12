import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import styled from "styled-components";

const Chart = ({ date, chartData }) => {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

  const options = {
    responsive: true,
    scales: {
      y: {
        grid: {
          color: "#E2E2E230",
        },
        axis: "y",
        display: true,
        position: "left",
        // ticks: {
        //   callback: (value) => {
        //     if (chartData[0].label === "roas") return `${value}%`;
        //     return value;
        //   },
        // },
      },
    },
  };

  const data = {
    labels: date,
    datasets: chartData.map((e, i) => {
      return {
        ...e,
        borderColor: i === 0 ? "tomato" : "rgb(65, 105, 225)",
        backgroundColor: i === 0 ? "rgba(255, 99, 132, 0.5)" : "rgb(22, 50, 136)",
      };
    }),
  };

  return (
    <ChartContainer>
      <Line data={data} options={options} />
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  > canvas {
    max-height: 400px;
  }
`;

export default Chart;
