import React, { useState} from "react";
import "./SearchResultsList.css"
import NewsItems from "../News/NewsItems";

export default function SearchResultsList({ results, setFiftyDayAverage, setStockName, setExchange, setMarketCap, display, setDisplay}) {

    const toggleDisplayOff = () => {
        setDisplay(false)
        }

    function appendOverview(name) {
        getYahooPrice(name.symbol)
        setStockName(name.longname);
        toggleDisplayOff();
    }

    const yahooOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '515a8e69camsh8fecf8fa617ca9dp1aca4fjsn00234c16da57',
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
        }
    };

    const yahooPriceOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '515a8e69camsh8fecf8fa617ca9dp1aca4fjsn00234c16da57',
            'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
        }
    };

    function getYahooPrice(value) {
        let yahooURL = 'https://yahoo-finance127.p.rapidapi.com/price/' + value + '-usd';
        fetch(yahooURL, yahooPriceOptions)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) { 
            console.log(data)
            setFiftyDayAverage("Fifty Day Average: $" + data.fiftyDayAverage.raw)
            setMarketCap("Market Cap: $" + data.marketCap.fmt)
            setExchange("Exchange: " + data.exchange)
        })
    };

    console.log(display)

    return (
        <>
        {display && (
        <div className="results-list bg-white text-black flex flex-col">
        {
        results.map((result, id) => {
            return <div key={id} onClick={() => appendOverview(result)} className="cursor-pointer search-item">{result.longname}</div>
        })  
        }
        </div>
)}
        </>
    )
}