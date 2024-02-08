import React from "react";

const GainerLoser = ({
  ticker,
  price,
  change_amount,
  change_percentage,
  volume,
  name,
  idx,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Last Price</th>
          <th>Change</th>
          <th>% Change</th>
        </tr>
      </thead>
      <tbody>
        <tr key={idx}>
          <td>{ticker}</td>
          <td>{price}</td>
          <td>{change_amount}</td>
          <td>{change_percentage}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default GainerLoser;
