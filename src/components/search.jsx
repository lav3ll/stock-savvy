import React, { useState } from 'react';
import { mockResponse } from './constants/mock-response';

const Search = () => {
    const [input, setInput] = useState("");
    const [bestMatches, setBestMatches] = useState(mockResponse.result);

    const clear = () => {
        setInput("");
        setBestMatches([]);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
        // You might want to update best matches based on the input here
        // For now, it just resets to the mock response when input changes
        // This is a placeholder for actual search functionality
        updateBestMatches(e.target.value);
    };

    const updateBestMatches = (searchTerm) => {
        // Here you would filter your mockResponse based on the searchTerm
        // This is a simplified example that just sets it back to the original mock response
        // In a real scenario, you would filter or fetch data based on the searchTerm
        const filteredMatches = mockResponse.result.filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setBestMatches(filteredMatches);
    };

    return (
        <div className="flex items-center my-4 border-2 rounded-md relative z-50 w-96">
            <label htmlFor="Search" className="sr-only">Search</label>
            <input
                type="text"
                id="Search"
                value={input} // Added value attribute for controlled component
                onChange={handleInputChange} // Added onChange handler
                placeholder="Search for..."
                className="w-full rounded-md border-gray-200 py-2.5 pr-10 shadow-sm sm:text-sm"
            />
            <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
                <button type="button" className="text-gray-600 hover:text-gray-700" onClick={clear}>
                    <span className="sr-only">Search</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </span>
        </div>
    );
};

export default Search;
