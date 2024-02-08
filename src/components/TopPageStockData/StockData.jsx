import React from "react";

const StockData = ({
  ticker,
  price,
  change_amount,
  change_percentage,
  volume,
}) => {
  const formattedChangePercentage = parseFloat(change_percentage);
  const formattedChangeAmount = parseFloat(change_amount);

  return (
    <div>
      <h1 className="text-lg font-bold">{ticker}</h1>
      <p className="text-gray-600">Price: {price}</p>
      <p
        className={`${
          formattedChangeAmount > 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {formattedChangeAmount}
      </p>
      <p
        className={`text-${
          formattedChangePercentage >= 0 ? "green" : "red"
        }-600`}
      >
        {formattedChangePercentage}%
      </p>
      {/* <p className="text-gray-600">Volume: {volume}</p> */}
    </div>
  );
};

export default StockData;
