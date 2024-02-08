import React from "react";
import GainerLoser from "./GainerLoser";
import stocks from "../data/gainers-losers-activelydata.json"; // Importing the stock data JSON file

const gainersData = stocks.top_gainers;
const losersData = stocks.top_gainers;

const GainersLosersContainer = () => {
  return (
    <div>
      {gainersData.forEach((gainer) => {
        <GainerLoser
          key={idx}
          name="Gainers"
          ticker={gainer.ticker}
          price={gainer.price}
          change_amount={gainer.change_amount}
          change_percentage={gainer.change_percentage}
          volume={gainer.volume}
        />;
      })}
    </div>
  );
};

export default GainersLosersContainer;
