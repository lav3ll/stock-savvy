import React from "react";

const Table = ({
  ticker,
  price,
  change_amount,
  change_percentage,
  volume,
  name,
  idx,
  color,
}) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Symbol
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Price
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Change
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                % Change
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr key={idx}>
              <td className="px-4 py-2 whitespace-nowrap font-bold text-blue-500">
                {ticker}
              </td>
              <td className="px-4 py-2 whitespace-nowrap font-medium">
                {price}
              </td>
              <td
                className={`px-4 py-2 whitespace-nowrap font-medium text-${color}-500`}
              >
                {change_amount}
              </td>
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
