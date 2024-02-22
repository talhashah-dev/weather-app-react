import React from "react";
import Swal from "sweetalert2";
import "../assets/css/styles.css";

import clear_icon from "../assets/icons/clear.svg";
import cloud_icon from "../assets/icons/cloud.svg";
import partly_cloudy_icon from "../assets/icons/partly-cloudy.svg";
import rain_icon from "../assets/icons/rainy.svg";
import snow_icon from "../assets/icons/snow.svg";
import wind_icon from "../assets/icons/wind.svg";
import humidity_icon from "../assets/icons/humidity.png";
import search_icon from "../assets/icons/search.png";

function WeatherApp() {
  const api_key = "210eeabe1cac851c368047662c4815fd";

  const search = async () => {
    const cityInput = document.getElementsByClassName("cityInput");
    if(cityInput[0].value === "")
    {
      Swal.fire({
        title: "Oops...",
        text: "You need to enter a City name",
        icon: "error",
      });
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput[0].value}&units=metric&appid=${api_key}`
    let response = await fetch(url);
    let data = await response.json()

    if(data.cod === "404"){
      Swal.fire({
        title: "Hmm...",
        text: "Are you sure City name is Correct!",
        icon: "warning",
      });
    } else {
      const humidity = document.getElementsByClassName("humidity-percentage");
      const wind_speed = document.getElementsByClassName("wind-speed");
      const temprature = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");
      const description = document.getElementsByClassName("description");

      humidity[0].innerHTML = data.main.humidity;
      wind_speed[0].innerHTML = data.wind.speed + " Km/h";
      temprature[0].innerHTML = data.main.temp + " °C";
      location[0].innerHTML = data.name;
      description[0].innerHTML = data.weather[0].description;
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search City" />
        <img
          src={search_icon}
          alt=""
          className="search-icon"
          onClick={() => {
            search();
          }}
        />
      </div>

      <div className="weather-icon">
        <img src={cloud_icon} alt="" width="350px" />
      </div>

      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>

      <div className="data-container">
        <div className="element">
          <div className="data">
            <div className="text">Humidity</div>
            <div className="humidity-percentage"></div>
          </div>
        </div>
        <div className="element">
          <div className="data">
            <div className="text">Wind Speed</div>
            <div className="wind-speed"></div>
          </div>
        </div>
        <div className="element">
          <div className="data">
            <div className="text">Description</div>
            <div className="description"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
