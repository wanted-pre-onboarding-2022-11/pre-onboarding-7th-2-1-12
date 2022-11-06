import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {},
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const Chart = ({ data, status1, status2 }) => {
  const labels = data.map((item) => item.date);
  const data1 = data.map((item) => item[status1]);
  const data2 = data.map((item) => item[status2]);

  const chartData = {
    labels,
    datasets: [
      {
        data: data1,
        borderColor: "#4FADF7",
        backgroundColor: "#4FADF7",
        yAxisID: "y",
      },
      {
        data: data2,
        borderColor: "#85DA47",
        backgroundColor: "#85DA47",
        yAxisID: "y1",
      },
    ],
  };

  return (
    <S.Container>
      <Line options={options} data={chartData} />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    margin-top: 4rem;
  `,
};

export default Chart;
