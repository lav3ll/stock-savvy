import React, { useRef, useEffect } from "react";
import StockData from "./StockData";
import stocks from "../data/gainers-losers-activelydata.json";
import "./StocksCarousel.scss";

const StocksCarousel = () => {
  const carouselRef = useRef(null);

  // Function to scroll the carousel
  const scrollCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 1; // Adjust scroll speed as needed
    }
  };

  // Automatically scroll the carousel
  useEffect(() => {
    const intervalId = setInterval(scrollCarousel, 50); // Adjust interval duration as needed
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden carousel-container">
      <div
        ref={carouselRef}
        className="flex gap-4 py-2" // Adjust gap and other styles as needed
      >
        {stocks.most_actively_traded.map((stock, idx) => (
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

export default StocksCarousel;
