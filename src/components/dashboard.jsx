import React, { useState, useEffect } from "react";
import Card from "./card";
import StockData from "./TopPageStockData/StockData"; // Importing the StockData component
import stocks from "./data/gainers-losers-activelydata.json"; // Importing the stock data JSON file
// import NewsItems from "./News/NewsItems";
import StocksCarousel from "../components/TopPageStockData/StocksCarousel";
// import TopsHeadlines from "./News/Topheadlines";
import Chart from "./chart.jsx";
import NewsCard from "./News/NewsCard.jsx";
// import StockChart from "./chart";




const Dashboard = ({news, setNews}) => {
   

    useEffect(() => {
    }, [news]);
    

    return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-4 p-8">
        <div className="col-span-1 row-span 1md:col-span-1 xl:col-span-3 row-span-1">
            <Card>
                {/* <h2>Search for Stock Info</h2> */}
            </Card>
        </div>
        {/* <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
        </div> */}
        <div className="md:col-span-2 row-span-4">
            <Card>
                <h2>Markets Today</h2>
                <StocksCarousel />
                <h2>IBM</h2>
                <Chart />
                <br></br>
            </Card>
        </div>
        <div>
            <Card>Overview</Card>
        </div>
        <div className="overflow-y-scroll bg-indigo-50 border-1 rounded-md row-span-2 xl:row-span-3">
            <Card> 
                <h2 className="font-semibold"> News </h2> 
                {/* <NewsCard/> */}
                <NewsCard>
                {news.map((article, idx) => (
                    <div key={idx} className=" bg-slate-50 border border-indigo-200 rounded-md shadow-lg dark:bg-white-80 dark:border-indigo-200 m-2 transition-transform transform hover:bg-indigo-50">
                    <div className=" bg-cover bg-no-repeat m-3 p-3">
                        <a href={article.url} target="_blank">
                        <img className="rounded-lg m-1 w-full object-cover" src={article.image} alt={article.title} />
                        <h5 className="font-semibold text-left m-2">{article.title}</h5>
                        <p className="text-left text-xs m-2">{article.description}</p>
                        <p className="text-left text-xs m-2"> Source: {article.source.name} <br></br>{new Date(article.publishedAt).toLocaleDateString()}</p>
                        </a>
                    </div>
                    </div>
                ))}
                {/* <div className="block max-w-18rem rounded-lg bg-grey mb-2">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat m-3">
                        {news.map((article, idx) => (
                            <a  href={article.url} target="_blank" key={idx}>
                                <img className="rounded-lg m-1" src={article.image} alt={article.title} />
                                <h5 className="font-semibold text-left m-2">{article.title}</h5>
                                <p className="text-left text-xs m-2"> {article.description}</p>
                                <p className="text-left text-xs m-1"> Source:{article.source.name} {article.publishedAt}</p>
                            </a>
                        ))}
                    </div>
                </div> */}
                </NewsCard>

                {/* <Card>
                {news.map((article, idx) => (
                    <a href={article.url} target="_blank" key={idx}>
                        <img src={article.image} alt={article.title}/>
                        <h5 className="font-semibold text-left"> {article.title} </h5>
                        <p className="text-left text-xs"> {article.description} </p>
                        <p className="text-left text-xs"> {article.publishedAt}</p>
                    </a>
                ))}
                </Card> */}
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

