import react from "react";
import axios from "axios";
import { useState } from "react";


function NewsItems(props) {
    const [search, setSearch] = useState("");
    const [imgSrc, setImgSrc] = useState("null");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.request(`https://api.currentsapi.services/v1/search?apiKey=1wMY1qB4mop_JYwMJ-ZSM8_-g6JXv5zIz2OW4PXryGNYehjc&keywords=${search}`)
            .then((response) => {
                console.log(response.data.news);
                if (response && response.data.news)
                    setImgSrc(response.data.image);
                    props.setNews(response.data.news)
            })
    };
    return (
        <form className="relative" onSubmit ={handleSubmit}>
            <label htmlFor="search-input" className="sr-only"> Search </label>

                <input
                type="text"
                id="search-input"
                placeholder=" Search for news and companies"
                className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button type="button" className="text-gray-600 hover:text-gray-700">
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
        </form>
    )

};

export default NewsItems;

// change side to top news?
// create Search function to initiate search using keywords
// 