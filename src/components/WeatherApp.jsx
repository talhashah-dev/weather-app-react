import React from "react";
import Swal from "sweetalert2";
import "../assets/css/styles.css";


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

      humidity[0].innerHTML = data.main.humidity + "%";
      wind_speed[0].innerHTML = data.wind.speed + " Km/h";
      temprature[0].innerHTML = data.main.temp + " °C";
      location[0].innerHTML = data.name;
      description[0].innerHTML = data.weather[0].description;
    }
  };

  return (
    <div className="container">
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Type Location Here" />
        <button type="button" className="search-btn">Search</button>
      </div>
      <div className="weather-info">
        <img src="" alt="" className="weather-icon" />
        <div className="temp-box">
          <p className="temp">23</p>
          <p className="temp-hi-low">19/26</p>
        </div>
        <div className="extra-info">
           <p className="wind-speed">12 km/h</p>  
           <p className="pressure">79%</p>  
           <p className="humidity">30%</p>  
        </div>
        <div className="weekly-forecast">
          <div className="forecast-box">
            <img src="" alt="" className="forecast-icon" />
            <p className="temp-hi-low">19/26</p>
            <p className="weekday">Mon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
