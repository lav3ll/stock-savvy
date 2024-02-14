import React, { useState} from "react";
import "./SearchResultsList.css"
import NewsItems from "../News/NewsItems";

export default function SearchResultsList({ results }) {
    function appendOverview(name) {
        console.log('test')
        
    }

    return (
        <div className="results-list bg-white text-black flex flex-col">
           {
            results.map((result, id) => {
            return <div key={id} onClick={appendOverview(result)} className="cursor-pointer search-item">{result.longname}</div>
           }) 
           }
        </div>
    )
}