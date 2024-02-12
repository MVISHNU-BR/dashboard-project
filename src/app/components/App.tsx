'use client';

import "../globals.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Jan",
    'money out': 4000,
    'money In' : 2400,
    amt: 2400
  },
  {
    name: "Mar",
    'money out':3000,
    'money In' : 2398,
    amt: 2210
  },
  {
    name: "May",
    'money out': 2000,
    'money In' : 800,
    amt: 2290
  },
  {
    name: "Jul",
    'money out': 2780,
    'money In' : 3908,
    amt: 2000
  },
  {
    name: "Sep",
    'money out': 1890,
    'money In' : 4800,
    amt: 2181
  },
  {
    name: "Nov",
    'money out': 2390,
    'money In' : 3800,
    amt: 2500
  },
  {
    name: "Dec",
    'money out': 3490,
    'money In' : 4300,
    amt: 2100
  }
];

export default function App() {
  return (
    <BarChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 30,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="money out" stackId="a" fill="#4D91FF" />
      <Bar dataKey="money In" stackId="a" fill="#99C0FF" />
    </BarChart>
  );
}
