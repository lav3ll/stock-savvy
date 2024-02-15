import React, { useState, useEffect } from "react";
import Card from "./card";
import StockData from "./TopPageStockData/StockData"; // Importing the StockData component
import stocks from "./data/gainers-losers-activelydata.json"; // Importing the stock data JSON file
import StocksCarousel from "../components/TopPageStockData/StocksCarousel";
import Chart from "./chart.jsx";
import NewsCard from "./News/NewsCard";
import GLContainer from "./SideStockData/GLContainer";
import Modal from "./GlobalComponents/Modal";
import Navbar from "./Navbar/Navbar";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";



// import StockChart from "./chart";

const Dashboard = ({
  news,
  setNews,
  fiftyDayAverage,
  stockName,
  marketCap,
  exchange,
}) => {
  useEffect(() => {
  }, [news]);



  return (
    <div className='h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 gap-4 p-8 flex flex-col'>
      {/* <div className='col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center'>
        <Card>
        <h2 className='text-xl font-semibold'>Welcome to Stock Savvy!</h2>
        <p className='text-gray-700 text-sm'>
          This is a dashboard that helps you navigate the stock market. On the <b>search bar</b> above, you can search for a stock by name or by ticker symbol.
        </p>
        </Card>
      </div> */}
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 ">
        <Card>
        <h2 className='text-xl font-semibold'>Welcome to Stock Savvy!</h2>
        <p className='text-gray-700 text-l'>
          This is a dashboard that helps you navigate the stock market. 
          
          Here's how to use the site in 5 easy steps: 
          <br></br>
          1. On the <b>Search Bar</b> above, you can search for a stock by name or by ticker symbol.
          <br></br>
          2. In the <b>Markets Today</b> below, you will find the gainers and losers of the most actively traded stocks.
          <br></br>
          3. In the <b>Overview</b> section to the right, you will find further infromation about the stock that you have submitted on the search bar. 
          <br></br>
          4. In the <b>News</b> section to the lower right, you will find the latest relevant news about the stock that you have submitted on the search bar. 
          <br></br>
          5. Most importantly, <b>thanks</b> for your visit and enjoy <b>Stock Savvy</b>.
        </p>
        </Card>
        </div>
      <div className='md:col-span-2 row-span-4'>
        <Card>

          <h2 className='text-xl font-semibold'>Markets Today</h2>
          <br></br>
          <StocksCarousel />
          <br></br>
          <h2 class="text-xl font-semibold">S&P 500 - Historical performance</h2>
          <Chart />
          <br></br>
        </Card>
      </div>
      <div>
        <Card>
          <h2 className='font-semibold'>Overview</h2>
          <h2 className='text-3xl font-bold'>{stockName}</h2>
          <div>{fiftyDayAverage}</div>
          <div>{marketCap}</div>
          <div>{exchange}</div>
        </Card>
      </div>
      <div className='overflow-y-scroll bg-indigo-50 rounded-md row-span-2 xl:row-span-3'>
        <Card>
          <h2 className='font-semibold'> News </h2> 
            <NewsCard>
              {news.map((article, idx) => (
                <div key={idx} className= 'bg-slate-50 border border-indigo-200 rounded-md shadow-lg dark:bg-white-80 dark:border-indigo-200 m-2 transition-transform transform hover:bg-indigo-50'>
                <div className=" bg-cover bg-no-repeat mr-2 p-3">
                  <a href={article.url} target="_blank">

                    <img className="rounded-lg m-1 w-full object-cover" src={article.image} alt={article.title} />
                    <h5 className="font-semibold text-left m-2">{article.title}</h5>
                    <p className="text-left text-xs m-2">{article.description}</p>
                    <p className="text-left text-xs m-2"> Source: {article.source.name} 
                    <br></br>
                    {new Date(article.publishedAt).toLocaleDateString()}</p>
                        
                  </a>
                </div>
                </div>
                ))}
            </NewsCard>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

// const Dashboard = () => {
//   return (
//     <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-4 p-8">
//       <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
//         <h1>Stock Savvy</h1>
//         <br></br>
//         <Search />
//       </div>
//       <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
//         <StocksCarousel />
//       </div>
//       <div className="md:col-span-2 row-span-4">
//         <Card>Chart</Card>
//       </div>
//       <div>
//         <Card>Overview</Card>
//       </div>
//       <div className="row-span-2 xl:row-span-3">
//         <Card>Details</Card>
//       </div>
//     </div>
//   );
// };

// const Dashboard = () => {
//     return (
//     <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-DMSans bg-indigo-100 text-gray-800">

//     <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
//         <Card>
//             <h1 className="text-4xl font-extrabold">Stock Savvy</h1>
//             <Search />
//         </Card>
//     </div>
//     <div className="md:col-span-2 row-span-4">
//         <Card><StocksCarousel /></Card>
//     </div>
//     <div>
//         <Card>Overview</Card>
//     </div>
//     <div className ="row-span-2 xl:row-span-3">
//         <Card>Details</Card>
//     </div>

//     </div>
//     )}
// // Extracting the most actively traded stocks from the imported JSON data
// const mostActivelyTraded = stocks.most_actively_traded;

// // Functional component for rendering the stocks landing page
// export const StocksLanding = () => {
//   return (
//     <div>
//       {/* Container div with flex layout */}
//       <div className="flex justify-between items-center border-b border-gray-200 py-2">
//         {/* Mapping over the most actively traded stocks and rendering StockData component for each */}
//         {mostActivelyTraded.map((stock, idx) => (
//           <StockData
//             key={idx}
//             ticker={stock.ticker}
//             price={stock.price}
//             change_amount={stock.change_amount}
//             change_percentage={stock.change_percentage}
//             volume={stock.volume}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };