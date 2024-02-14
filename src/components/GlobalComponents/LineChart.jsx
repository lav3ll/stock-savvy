import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import Modal from '../Navbar/Modal';
import dummyStockData from '../data/stockSeriesTestData.json';

const LineChart = ({ stockSeriesData }) => {
  // Check if stockSeriesData is null, if so, use dummyStockData
  const dataToUse = stockSeriesData ? stockSeriesData : dummyStockData;

  const formattedData1 = Object.entries(dataToUse['Time Series (Daily)']).map(
    ([date, info]) => ({
      x: new Date(date),
      y: parseFloat(info['1. open']),
    })
  );
  const formattedData2 = Object.entries(dataToUse['Time Series (Daily)']).map(
    ([date, info]) => ({
      x: new Date(date),
      y: parseFloat(info['2. high']),
    })
  );
  const formattedData3 = Object.entries(dataToUse['Time Series (Daily)']).map(
    ([date, info]) => ({
      x: new Date(date),
      y: parseFloat(info['3. low']),
    })
  );
  const formattedData4 = Object.entries(dataToUse['Time Series (Daily)']).map(
    ([date, info]) => ({
      x: new Date(date),
      y: parseFloat(info['4. close']),
    })
  );

  // Data for Nivo Line chart
  const data = [
    { id: 'Daily Opening', data: formattedData1 },
    { id: 'Daily Closing', data: formattedData4 },
    { id: 'Daily High', data: formattedData2 },
    { id: 'Daily Low', data: formattedData3 },
  ];
  return (
    <div style={{ height: '400px' }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'time', format: '%Y-%m-%d', precision: 'day' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=' >-.2f'
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 1,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'paired' }}
        pointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableArea={true}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default LineChart;
