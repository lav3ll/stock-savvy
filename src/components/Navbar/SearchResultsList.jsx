import react from "react";
import "./SearchResultsList.css"


export default function SearchResultsList({ results }) {
    return (
        <div className="results-list bg-white text-black flex flex-col">
           {
            results.map((result, id) => {
            return <div key={id}>{result.longname}</div>
           }) 
           }
        </div>
    )
}