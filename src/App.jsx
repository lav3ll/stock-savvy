import { useState } from "react";
import "./App.css";
import { StocksLanding } from "./components/TopPageStockData/StocksLanding";
import GLContainer from "./components/SideStockData/GLContainer";
import Dashboard from "./components/dashboard";
import Modal from "./components/GlobalComponents/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Dashboard />
      <StocksLanding />
      <GLContainer />
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}

export default App;
