import React from "react";
import StockData from "./StockData"; // Importing the StockData component
import stocks from "../data/gainers-losers-activelydata.json"; // Importing the stock data JSON file

// Extracting the most actively traded stocks from the imported JSON data
const mostActivelyTraded = stocks.most_actively_traded;

// Functional component for rendering the stocks landing page
export const StocksLanding = () => {
  return (
    <div>
      {/* Container div with flex layout */}
      <div className="flex justify-between items-center border-b border-gray-200 py-2">
        {/* Mapping over the most actively traded stocks and rendering StockData component for each */}
        {mostActivelyTraded.map((stock, idx) => (
          <StockData
            key={idx}
            ticker={stock.ticker}
            price={stock.price}
            change_amount={stock.change_amount}
            change_percentage={stock.change_percentage}
            volume={stock.volume}
          />
        ))}
      </div>
    </div>
  );
};
