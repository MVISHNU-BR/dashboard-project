'use client';


import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Money out", "Money In"],
  ["Jan", 1000, 400],
  ["", 1170, 460],
  ["Mar", 660, 1120],
  ["", 1030, 540],
  ["May", 1030, 540],
  ["", 1030, 540],
  ["Jul", 1030, 540],
  ["", 1030, 540],
  ["Sep", 1030, 540],
  ["", 1030, 540],
  ["Nov", 1030, 540],
  ["Dec", 1030, 540],
];

export const options = {
  colors: ["#4D91FF", "#99C0FF"],
  isStacked: true,
  legend: { position: "top", alignment: "end" },
};

export default function App() {
  return (
    <Chart
      chartType="ColumnChart"
      width="99%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
