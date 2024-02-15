import React, {useState} from "react"
import {FaSearch} from "react-icons/fa"
import "./Searchbar.css"
import axios from "axios";

export default function Searchbar({ setResults, news, setNews }) {

    const [input, setInput] = useState("");
    
    

    //The RapidAPI options for the Yahoo finance call
    const yahooOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '515a8e69camsh8fecf8fa617ca9dp1aca4fjsn00234c16da57',
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
        }
    };

    // Fetches company names
    function getYahooData(value) {
        let yahooURL = 'https://yahoo-finance127.p.rapidapi.com/search/' + value;
        fetch(yahooURL, yahooOptions)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) { 
            console.log(data)
            let dataArr = data.quotes
            setResults(dataArr);
        })
    };

    function getNews(search) {
        axios.request(`https://gnews.io/api/v4/search?q=${search}&lang=en&in=title,description&apikey=3bcaf7196b03271776f870904803a308`)
        .then((response) => {
            console.log(response.data.articles);
            if (response && response.data.articles)
                // setImgSrc(response.data.image);
               setNews(response.data.articles)
                // setSearch(""); 

        })
        .catch((error) => {
            console.error('Error fetching news', error);
        });
    }

    const handleChange = (value) => {
        setInput(value)
        if (value) {
            getYahooData(value)
            getNews(value)
        }
    }

    return (
        <div className="input-wrapper flex items-center gap-3">
            <FaSearch/>
            <input placeholder="Search for a company..." className="p-1 text-black" 
            value={input} 
            onChange={(e) => handleChange(e.target.value)}/>
        </div>
    )
}

//What i want
// -The user to be able to click on results displayed
// -use result.exhange to find ticker
// -Use nasdaq ticker to  put in a fetch request URL to yahoo finance
// -The fetch request data returned (price, market cap, etc) gets put into the overview