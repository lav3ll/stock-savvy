
import Searchbar from "./Searchbar"

export default function Navbar() {
    return (
        <nav className="my-nav bg-indigo-900 text-white flex justify-between items-center gap-8 p-4">
            <div className="flex gap-5 my-logo">
                <img src="/stocksavvy-logo-1.jpg" alt="" className="h-10 rounded-xl"/>
                <a href="/" className="my-site text-3xl">Stock Savvy</a>
            </div>
            <div className="searchbar-container">
                <Searchbar></Searchbar>
                <div>Searchbar results</div>
            </div>
            <ul className="flex gap-8">
                <li><a href="/">Home</a></li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}