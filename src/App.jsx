import { useState } from "react";
import "./App.css";
import { StocksLanding } from "./components/TopPageStockData/StocksLanding";
import GLContainer from "./components/SideStockData/GLContainer";

function App() {
  return (
    <>
      <StocksLanding />
      <GLContainer />
    </>
  );
}

export default App;
