import { useState } from "react"
import Searchbar from "./Searchbar"
import SearchResultsList from "./SearchResultsList"
import Modal from "./Modal"

export default function Navbar({news, setNews, setFiftyDayAverage, setStockName, setExchange, setMarketCap}) {

const [results, setResults] = useState([])

const [display, setDisplay] = useState(true)

    console.log(display)

    return (
        <nav className="bg-indigo-900 text-white flex justify-between items-center gap-2 p-2 md:gap-8 md:p-4">
            <div className="flex gap-2 md:gap-5 my-logo flex-grow">
                <img src="/stocksavvy-logo-1.jpg" alt="" className="h-10 rounded-xl"/>
                <a href="/" className="text-xl md:text-3xl lg:flex hidden">Stock Savvy</a>
            </div>
<<<<<<< HEAD
            <div className="searchbar-container w-full md:w-auto">
                <Searchbar news={news} setNews={setNews} setResults={setResults}/>
                <SearchResultsList results={results} setFiftyDayAverage={setFiftyDayAverage} setStockName={setStockName} setMarketCap={setMarketCap} setExchange={setExchange} />
=======
            <div className="searchbar-container flex-grow">
                <Searchbar news={news} setNews={setNews} setResults={setResults} display={display} setDisplay={setDisplay}/>
                <SearchResultsList results={results} setFiftyDayAverage={setFiftyDayAverage} setStockName={setStockName} setMarketCap={setMarketCap} setExchange={setExchange} display={display} setDisplay={setDisplay} />
>>>>>>> 75eae1d8eebf8ed8ec8f2d80877f9c42991170a8
            </div>
            <ul className="flex gap-2 md:gap-8">
                <li><a href="/">Home</a></li>
                <li><Modal></Modal></li>
            </ul>
        </nav>
    )
}