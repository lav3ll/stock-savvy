import React from "react";
import GainerLoser from "./GainerLoser"; // Importing the GainerLoser component
import stocks from "../data/gainers-losers-activelydata.json"; // Importing the stock data JSON file

// Extracting gainer and loser data from the imported JSON file
const gainersData = stocks.top_gainers;
const losersData = stocks.top_gainers; // There seems to be a mistake here. It should be 'top_losers' for losersData.

// Functional component for rendering the container of gainers and losers
const GLContainer = () => {
  return (
    <div>
      <h3>Gainers</h3>
      {/* Rendering GainerLoser components for each gainer */}
      {gainersData.map((gainer, idx) => (
        <GainerLoser
          key={idx}
          name="Gainers" // Passing the name prop as "Gainers"
          ticker={gainer.ticker}
          price={gainer.price}
          change_amount={gainer.change_amount}
          change_percentage={gainer.change_percentage}
          volume={gainer.volume}
          color="green"
        />
      ))}

      <h3>Losers</h3>
      {/* Rendering GainerLoser components for each loser */}
      {losersData.map((loser, idx) => (
        <GainerLoser
          key={idx}
          name="Losers" // Passing the name prop as "Losers"
          ticker={loser.ticker}
          price={loser.price}
          change_amount={loser.change_amount}
          change_percentage={loser.change_percentage}
          volume={loser.volume}
          color="red"
        />
      ))}
    </div>
  );
};

export default GLContainer;
