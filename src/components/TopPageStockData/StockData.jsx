import React from "react";

const StockData = ({
  ticker,
  price,
  change_amount,
  change_percentage,
  volume,
}) => {
  // Convert change percentage and change amount to numbers from strings
  const formattedChangePercentage = parseFloat(change_percentage);
  const formattedChangeAmount = parseFloat(change_amount);

  return (
    <div>
      {/* Display the ticker symbol */}
      <h1 className="text-lg font-bold">{ticker}</h1>
      {/* Display the price */}
      <p className="text-gray-600">Price: {price}</p>
      {/* Apply text color class based on whether change amount is positive or negative */}
      <p
        className={`${
          formattedChangeAmount > 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {formattedChangeAmount}
      </p>
      {/* Apply text color class based on whether change percentage is positive or negative */}
      <p
        className={`text-${
          formattedChangePercentage >= 0 ? "green" : "red"
        }-600`}
      >
        {formattedChangePercentage}%
      </p>
      {/* Display the volume */}
      {/* <p className="text-gray-600">Volume: {volume}</p> */}
    </div>
  );
};

export default StockData;
