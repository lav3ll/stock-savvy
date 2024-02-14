import React, { useState } from "react";
import Modal from "../GlobalComponents/Modal";
import stockData from "../data/modalTestData.json";
import timeSeriesData from "../data/stockSeriesTestData.json";
import "./StocksCarousel.scss";
import axios from "axios";

const StockData = ({
  ticker,
  price,
  change_amount,
  change_percentage,
  volume,
}) => {
  // Convert change percentage and change amount to numbers from strings
  const formattedChangePercentage = parseFloat(change_percentage).toFixed(2);
  const formattedChangeAmount = parseFloat(change_amount);

  // State to manage the modal's visibility and data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalLineData, setmodalLineData] = useState(null);

  // Function to fetch modal data and toggle the modal
  const toggleModal = () => {
    axios
      .request(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=6AQV1N59NWL5U1P4`
      )
      .then((response) => {
        if (
          response.data &&
          response.data.Information &&
          response.data.Information.includes(
            "Thank you for using Alpha Vantage!"
          )
        ) {
          // Use stockData import if the response contains rate limit message
          setModalData(stockData);
        } else {
          setModalData(response.data);
        }
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error("Error fetching modal data:", error);
        // Log the entire error object for more details
        console.error(error);
      });

    // Fetch intraday time series data
    axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&interval=5min&outputsize=full&apikey=SWQUV2JZH8YTDYQ5`
      )
      .then((response) => {
        if (
          response.data &&
          response.data.Information &&
          response.data.Information.includes(
            "Thank you for using Alpha Vantage!"
          )
        ) {
          setmodalLineData(timeSeriesData);
        } else {
          setmodalLineData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching intraday time series data:", error);
      });
  };

  return (
    <div className="ml-6">
      {/* Display the ticker symbol and make it clickable to open the modal */}
      <h1 className="text-lg font-bold cursor-pointer" onClick={toggleModal}>
        {ticker}
      </h1>
      {/* Modal */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={modalData}
          lineData={modalLineData}
        />
      )}
      {/* Display the price */}
      <p className="text-gray-600">${price}</p>
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
