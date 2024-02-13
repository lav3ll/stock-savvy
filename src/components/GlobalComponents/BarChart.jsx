import { ResponsiveBar } from "@nivo/bar";
import NivoTheme from "../data/NivoTheme.json";

const BarChart = ({ stockData }) => {
  const data = [
    {
      metric: "Market Capitalization",
      MarketCapitalization: parseFloat(stockData.MarketCapitalization),
    },
    {
      metric: "EBITDA",
      EBITDA: parseFloat(stockData.EBITDA),
    },
    {
      metric: "Revenue (TTM)",
      RevenueTTM: parseFloat(stockData.RevenueTTM),
    },
    {
      metric: "Gross Profit (TTM)",
      GrossProfitTTM: parseFloat(stockData.GrossProfitTTM),
    },
    {
      metric: "Shares Outstanding",
      SharesOutstanding: parseFloat(stockData.SharesOutstanding),
    },
  ];

  return (
    <div style={{ width: "600px", height: "400px" }}>
      {/* Adjust width and height */}
      <ResponsiveBar
        data={data}
        keys={[
          "MarketCapitalization",
          "EBITDA",
          "RevenueTTM",
          "GrossProfitTTM",
          "SharesOutstanding",
        ]}
        indexBy="metric"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        layout="horizontal"
        colors={{ scheme: "accent" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -23,
          legend: "", // Set legend to empty string
          legendPosition: "middle",
          legendOffset: 36,
        }}
        axisLeft={{
          tickSize: 1,
          tickPadding: 2,
          tickRotation: 0,
          legend: "", // Set legend to empty string
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default BarChart;
