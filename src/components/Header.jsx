import React from 'react'
import "../App.css"


function Header() {
  return (
    <div className="header">
      <h1 className="logo">Weather App</h1>
      <span className="credit">
        <a href="https://github.com/talhashah-dev/weather-app-react" target="_blank" rel="noreferrer">Github</a>
        <a href="https://www.linkedin.com/in/talhashah-dev/" target="_blank" rel="noreferrer">Linkedin</a>  
      </span>      
    </div>
  )
}

export default Header
