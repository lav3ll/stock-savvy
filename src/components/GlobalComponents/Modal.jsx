import React from "react";
import BarChart from "../GlobalComponents/BarChart";
import LineChart from "../GlobalComponents/LineChart";
import stockSeriesData from "../data/stockSeriesTestData.json";

const Modal = ({ isOpen, onClose, data, modalBtnTxt, lineData }) => {
  console.log(lineData);
  return (
    <>
      {/* Main modal */}
      {isOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="relative w-full max-w-screen-lg">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 overflow-hidden">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 bg-indigo-900 dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {data.Name}
                </h3>
                <button
                  onClick={onClose}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  X<span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Description:
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {data.Description}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Address:
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {data.Address}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Sector:
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {data.Sector}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Industry:
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {data.Industry}
                  </div>
                  {/* Add more data fields as needed */}
                </div>
              </div>
              {/* Charts container */}
              <div className="flex">
                <div className="w-1/2">
                  <BarChart stockData={data} />
                </div>
                <div className="w-1/2">
                  <LineChart stockSeriesData={lineData} />
                </div>
              </div>
              {/* Modal footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
