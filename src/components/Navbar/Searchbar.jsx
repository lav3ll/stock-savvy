import React from "react"
import {FaSearch} from "react-icons/fa"

export default function Searchbar() {
    return (
        <div className="input-wrapper flex items-center gap-3">
            <FaSearch/>
            <input placeholder="Search for a company..." className="p-1"/>
        </div>
    )
}