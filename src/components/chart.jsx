import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import mockMonthlyData from './constants/mockMonthlyData'; // importing the mock data JSON file
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";


const Chart = () => {
  return (
    <div>Test</div>
  )
}

export default Chart

// const useMockData = true; // Avoid overloading the API 
    
//     const StockChart = ({ symbol }) => {
//         const chartRef = useRef(null);
//         const [chartData, setChartData] = useState(null);
      
//         useEffect(() => {
//           const processData = (data) => {
//             const monthlyData = data['Monthly Time Series'];
//             const chartLabels = Object.keys(monthlyData).slice(0, 30).reverse();
//             const chartPrices = chartLabels.map(date => monthlyData[date]['4. close']);
      
//             setChartData({
//               labels: chartLabels,
//               datasets: [
//                 {
//                   label: `${symbol} Monthly Close Prices`,
//                   backgroundColor: 'rgba(53, 162, 235, 0.5)',
//                   borderColor: 'rgb(53, 162, 235)',
//                   data: chartPrices,
//                 },
//               ],
//             });
//           };
      
//           if (useMockData) {
//             // Use mock data
//             processData(mockMonthlyData);
//         } else {
//             // Fetch real data from API
//             try {
//             const apiKey = '3JRNVJB2L0SVNOO1'; // Alex's API key
//             const url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${apiKey}`;
  
//             const response = await axios.get(url);
//             processData(response.data);
//           } catch (error) {
//             console.error('Error fetching stock data:', error);
//           }
//         }
//       };
  
//       fetchData();
//     }, [symbol]);,import React, { useEffect, useState, useRef } from 'react';
//     import axios from 'axios';
//     import {Chart} from 'chart.js';
//     import mockMonthlyData from './constants/mockMonthlyData'; // importing the mock data JSON file
    
//     const useMockData = true; // Avoid overloading the API 
    
//     const StockChart = ({ symbol }) => {
//       const chartRef = useRef(null);
//       const [chartData, setChartData] = useState(null);
    
//       useEffect(() => {
//         const processData = (data) => {
//           const monthlyData = data['Monthly Time Series'];
//           const chartLabels = Object.keys(monthlyData).slice(0, 30).reverse();
//           const chartPrices = chartLabels.map(date => monthlyData[date]['4. close']);
    
//           setChartData({
//             labels: chartLabels,
//             datasets: [
//               {
//                 label: ` Monthly Close Prices`,
//                 backgroundColor: 'rgba(53, 162, 235, 0.5)',
//                 borderColor: 'rgb(53, 162, 235)',
//                 data: chartPrices,
//               },
//             ],
//           });
//         };
    
//         if (useMockData) {
//           // Use mock data
//           processData(mockMonthlyData);
//         } else {
//           // Fetch real data from API
//           try {
//             const apiKey = '3JRNVJB2L0SVNOO1'; // Alex's API key
//             const url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=&apikey=`;
    
//             const response = await axios.get(url);
//             processData(response.data);
//           } catch (error) {
//             console.error('Error fetching stock data:', error);
//           }
//         }
//       }, [symbol]);
    
//       useEffect(() => {
//         if (chartData && chartRef.current) {
//           const chartContext = chartRef.current.getContext('2d');
//           new Chart(chartContext, {
//             type: 'line',
//             data: chartData,
//             options: {
//               scales: {
//                 y: {
//                   beginAtZero: false,
//                 },
//               },
//             },
//           });
//         }
//       }, [chartData]);
    
//       return <canvas ref={chartRef}></canvas>;
//     };
    
//     export default StockChart;