import { useState } from "react";
import "./App.css";
import { StocksLanding } from "./components/TopPageStockData/StocksLanding";
import GLContainer from "./components/SideStockData/GLContainer";
import Dashboard from "./components/dashboard";
import NewsItems from "./components/News/NewsItems";
import TopsHeadlines from "./components/News/Topheadlines";

function App() {
  return (
    <>
      <Dashboard />
      <StocksLanding />
      <GLContainer />
      <TopsHeadlines />
    </>
  );
}

export default App;
