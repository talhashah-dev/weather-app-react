import React from 'react'
import search_icon from "../assets/images/search-icon.png"
import "../App.css"


const show = () => {
    const currentLocation = document.getElementsByClassName("currentLocation");
    for (let i = 0; i < currentLocation.length; i++) {
        currentLocation[i].style.display = "block";
    }
}

function Search() {
  return (
    <>
        <div className="searchBox">
            <span>
            <img src={search_icon} alt="Search icon" className="searchIcon"/>
            <input type="text" className="searchInput" placeholder="Search your City" onClick={show} />
            <p className="print"></p>
            </span>
            {/* <button className="currentLocation">Use your currunt location</button> */}
        </div>
    </>
  )
}

export default Search
