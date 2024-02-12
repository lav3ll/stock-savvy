import { useState } from "react";
import "./App.css";
import { StocksLanding } from "./components/TopPageStockData/StocksLanding";
import GLContainer from "./components/SideStockData/GLContainer";
import Dashboard from "./components/dashboard";
import { Modal } from "bootstrap";

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
