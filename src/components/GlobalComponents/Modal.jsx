import React from "react";
import LineChart from "./LineChart";

const Modal = ({ isOpen, onClose, data, modalBtnTxt }) => {
  return (
    <>
      {/* Modal toggle button */}

      {/* Main modal */}
      {isOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
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
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {data.Description}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {data.Address}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {data.Sector}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {data.Industry}
                </p>
                <p></p>
              </div>

              {/* Modal footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"></div>
            </div>
          </div>
          <LineChart stockData={data} />
        </div>
      )}
    </>
  );
};

export default Modal;
