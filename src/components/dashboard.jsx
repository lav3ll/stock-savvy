import React from "react";
import Card from "./card";
import Search from "./search";
import StockData from "./TopPageStockData/StockData"; // Importing the StockData component
import stocks from "./data/gainers-losers-activelydata.json"; // Importing the stock data JSON file
import { StocksLanding } from "./TopPageStockData/StocksLanding";

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






const Dashboard = () => {
    return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-4 p-8">
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
            <h1>Stock Savvy</h1>
            <br></br>
            <Search/>
        </div>
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
        <StocksLanding />
        </div>
        <div className="md:col-span-2 row-span-4">
            <Card>Chart</Card>
        </div>
        <div>
            <Card>Overview</Card>
        </div>
        <div className="row-span-2 xl:row-span-3">
            <Card>Details</Card>
        </div>
    </div>
)
};

export default Dashboard; 


