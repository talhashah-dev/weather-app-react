import React from 'react'
import "../App.css"
import github_icon from "../assets/github-icon.png"

function Header() {
  return (
    <div className="header">
      <h1 className="logo">Weather App</h1>
      <span className="credit">
        <a href="https://github.com/talhashah-dev/weather-app-react" target="_blank" rel="noreferrer"><img src={github_icon} alt="" /></a>
      </span>      
    </div>
  )
}

export default Header
