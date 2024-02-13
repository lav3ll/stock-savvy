import React, {useState} from "react"
import {FaSearch} from "react-icons/fa"
import "./Searchbar.css"

export default function Searchbar({ setResults }) {

    const [input, setInput] = useState("")
    

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

    const handleChange = (value) => {
        setInput(value)
        if (value) {
            getYahooData(value)
        }
    }

    return (
        <div className="input-wrapper flex items-center gap-3">
            <FaSearch/>
            <input placeholder="Search for a company..." className="p-1 text-black" value={input} onChange={(e) => handleChange(e.target.value)}/>
        </div>
    )
}