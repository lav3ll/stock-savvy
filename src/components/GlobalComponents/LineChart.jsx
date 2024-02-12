import { ResponsiveLine } from "@nivo/line";

const LineChart = ({ stockData }) => {
  const data = [
    {
      x: "Market Capitalization",
      y: parseFloat(stockData.MarketCapitalization),
    },
    { x: "Revenue (TTM)", y: parseFloat(stockData.RevenueTTM) },
    { x: "Earnings Per Share (EPS)", y: parseFloat(stockData.EPS) },
  ];

  console.log(typeof stockData.MarketCapitalization);

  return (
    <ResponsiveLine
      data={[{ id: "Stock Data", data: data }]}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      curve="monotoneX"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -45,
        legend: "Metrics",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Value",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      colors={{ scheme: "category10" }}
      lineWidth={2}
      pointSize={5}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableSlices="x"
      sliceTooltip={({ slice }) => (
        <div
          style={{
            background: "white",
            padding: "9px 12px",
            border: "1px solid #ccc",
            borderRadius: "3px",
          }}
        >
          <div>
            <strong>{slice.points[0].data.xFormatted}</strong>
          </div>
          {slice.points.map((point) => (
            <div
              key={point.id}
              style={{
                color: point.serieColor,
                padding: "3px 0",
              }}
            >
              <strong>{point.serieId}</strong>: {point.data.yFormatted}
            </div>
          ))}
        </div>
      )}
      enableCrosshair={false}
      motionConfig="gentle"
    />
  );
};

export default LineChart;
