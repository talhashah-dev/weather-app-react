import React from "react";
import "../assets/css/styles.css";

import clear_icon from "../assets/icons/clear.svg";
import cloud_icon from "../assets/icons/cloud.svg";
import partly_cloudy_icon from "../assets/icons/partly-cloudy.svg";
import rain_icon from "../assets/icons/rainy.svg";
import snow_icon from "../assets/icons/snow.svg";
import wind_icon from "../assets/icons/wind.svg";
import humidity_icon from "../assets/icons/humidity.png";
import search_icon from "../assets/icons/search.png";

function WeatherrApp() {
  const api_key = "210eeabe1cac851c368047662c4815fd";

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search City" />
        <img src={search_icon} alt="" className="search-icon" />
      </div>

      <div className="weather-icon">
        <img src={cloud_icon} alt="" width="350px" />
      </div>

      <div className="weather-temp">24°C</div>

      <div className="weatgher-location">London</div>

      <div className="data-container">
        <div className="element">
          <div className="data">
            <div className="text">Humidity</div>
            <div className="humidity-percentage">64%</div>
          </div>
        </div>
        <div className="element">
          <div className="data">
            <div className="text">Wind Speed</div>
            <div className="wind-speed">5 km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherrApp;
