import React from "react";
import StockData from "./StockData";
import stocks from "../data/gainers-losers-activelydata.json";

const mostActivelyTraded = stocks.most_actively_traded;
const topGainers = stocks.top_gainers;
const topLosers = stocks.top_losers;

export const StocksLanding = () => {
  return (
    <div>
      <div className="flex justify-between items-center border-b border-gray-200 py-2">
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
