import { useState } from "react";
import "./App.css";
import { StocksLanding } from "./components/TopPageStockData/StocksLanding";
import GLContainer from "./components/SideStockData/GLContainer";
import Dashboard from "./components/dashboard";
import NewsItems from "./components/News/NewsItems";

function App() {
  return (
    <>
      <Dashboard />
      <StocksLanding />
      <GLContainer />
    </>
  );
}

export default App;
