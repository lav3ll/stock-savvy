import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import mockMonthlyData from './constants/mockMonthlyData.json'; 

const Chart = () => {
  const useLiveData = false; // Set to true to use live data, false to use mock data from mockMonthlyData.json 
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Closing Price",
        data: [],
        backgroundColor: "#064ff0",
        borderColor: "#064ff0",
        borderWidth: 1
      },
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      let monthlyData;
      if (useLiveData) {
        try {
          const response = await axios.get('https://www.alphavantage.co/query', {
            params: {
              function: 'TIME_SERIES_MONTHLY_ADJUSTED',
              symbol: 'SPY', // in the future change this to a symbol from search input field
              apikey: '3JRNVJB2L0SVNOO1' // Alex's API key for Alpha Vantage
            }
          });
          monthlyData = response.data['Monthly Adjusted Time Series'];
        } catch (error) {
          console.error('Error fetching live data:', error);
          return;
        }
      } else {
        // Use mock data
        monthlyData = mockMonthlyData["Monthly Time Series"];
      }
      updateChartData(monthlyData);
    };

    fetchData();
  }, []); // Keep empty so this runs only once after the initial render

  const updateChartData = (data) => {
    const labels = [];
    const chartData = [];
    Object.entries(data).forEach(([date, value]) => {
      labels.unshift(date); // Add date as label
      chartData.unshift(value['4. close']); // Add closing price
    });
    setChartData({
      labels,
      datasets: [
        {
          label: "Closing Price",
          data: chartData,
          backgroundColor: "#064ff0",
          borderColor: "#064ff0",
          borderWidth: 1
        },
      ]
    });
  };

  return (
      <Line data={chartData} />
  );
}

export default Chart;