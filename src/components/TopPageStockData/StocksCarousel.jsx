import React, { useRef, useEffect } from "react";
import StockData from "./StockData";
import stocks from "../data/gainers-losers-activelydata.json";
import "./StocksCarousel.scss";

const StocksCarousel = () => {
  const carouselRef = useRef(null);

  // Function to scroll the carousel
  const scrollCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 1; //scroll speed
    }
  };

  // Automatically scroll the carousel
  useEffect(() => {
    const intervalId = setInterval(scrollCarousel, 50); //  interval duration
    return () => clearInterval(intervalId);
  }, []);

  return (
    // Container for the carousel with overflow hidden to hide overflowing content
    <div className="overflow-hidden carousel-container">
      {/* Flex container for the carousel items with specified gap and padding */}
      <div ref={carouselRef} className="flex gap-4 py-2 carousel-track">
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
