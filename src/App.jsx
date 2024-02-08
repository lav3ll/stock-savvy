import { useState } from "react";
import "./App.css";
import { StocksLanding } from "./components/TopPageStockData/StocksLanding";
import { GainersLosersContainer } from "./components/SideStockData/GainersLosersContainer";

function App() {
  return (
    <>
      <StocksLanding />
      <GainersLosersContainer />
    </>
  );
}

export default App;
