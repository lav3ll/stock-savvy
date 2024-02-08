import React from "react";

// Table component that displays stock data
const Table = ({
  // Props passed to the component
  ticker, // Ticker symbol of the stock
  price, // Last price of the stock
  change_amount, // Change in price of the stock
  change_percentage, // Percentage change in price of the stock
  volume, // Volume of the stock
  name, // Name of the stock (not used in this component)
  idx, // Index of the stock in the list (used as a key for React)
  color, // Color of the text for change and % change
}) => {
  return (
    <>
      {/* Container for horizontal scrolling */}
      <div className="overflow-x-auto">
        {/* Table with automatic column sizing */}
        <table className="table-auto">
          {/* Table header */}
          <thead className="bg-gray-50">
            {/* Table header row */}
            <tr>
              {/* Header cell for Symbol */}
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Symbol
              </th>
              {/* Header cell for Last Price */}
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Price
              </th>
              {/* Header cell for Change */}
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Change
              </th>
              {/* Header cell for % Change */}
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                % Change
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Table row */}
            <tr key={idx}>
              {/* Table data cells */}
              {/* Data cell for Symbol */}
              <td className="px-4 py-2 whitespace-nowrap font-bold text-blue-500">
                {ticker}
              </td>
              {/* Data cell for Last Price */}
              <td className="px-4 py-2 whitespace-nowrap font-medium">
                {price}
              </td>
              {/* Data cell for Change */}
              <td
                className={`px-4 py-2 whitespace-nowrap font-medium text-${color}-500`}
              >
                {change_amount}
              </td>
              {/* Data cell for % Change */}
              <td
                className={`px-4 py-2 whitespace-nowrap font-medium text-${color}-500`}
              >
                {change_percentage}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
