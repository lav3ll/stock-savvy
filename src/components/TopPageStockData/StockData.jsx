import React, { useState } from "react";
import Modal from "../GlobalComponents/Modal";

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

  // State to manage the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal's visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Display the ticker symbol and make it clickable to open the modal */}
      <h1 className="text-lg font-bold cursor-pointer" onClick={toggleModal}>
        {ticker}
      </h1>
      {/* Modal */}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={toggleModal} />}
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
