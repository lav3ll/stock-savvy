import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const BarChart = ({ stockData }) => {
  const data = [
    {
      metric: "Market Capitalization",
      value: parseFloat(stockData.MarketCapitalization),
    },
    { metric: "Revenue (TTM)", value: parseFloat(stockData.RevenueTTM) },
    { metric: "Earnings Per Share (EPS)", value: parseFloat(stockData.EPS) },
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={["value"]}
      indexBy="metric"
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      padding={0.3}
      colors={{ scheme: "category10" }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -45,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Value",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default BarChart;
