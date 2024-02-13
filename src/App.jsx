import { useState } from "react";
import "./App.css";
import StocksCarousel from "./components/TopPageStockData/StocksCarousel";
import GLContainer from "./components/SideStockData/GLContainer";
import Dashboard from "./components/dashboard";
import Modal from "./components/GlobalComponents/Modal";
import Navbar from "./components/Navbar/Navbar"


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Navbar></Navbar>
      <Dashboard />
    </>
  );
}

export default App;
