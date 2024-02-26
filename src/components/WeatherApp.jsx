import React from "react";
import Swal from "sweetalert2";
import "../assets/css/styles.css";


function WeatherApp() {
  const api_key = "210eeabe1cac851c368047662c4815fd";

  const search = async () => {
    const cityInput = document.getElementsByClassName("city-input");
    if (cityInput[0].value === "") {
      Swal.fire({
        title: "Oops...",
        text: "You need to enter a City name",
        icon: "error",
      });
      return 0;
    }
    
    // used try-catch for error handling
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput[0].value}&units=metric&appid=${api_key}`;
      let response = await fetch(url);
      let data = await response.json();
      if (data.cod === "404") {
        Swal.fire({
          title: "Hmm...",
          text: "Are you sure City name is Correct!",
          icon: "warning",
        });
      } else {
        // getting elements from dom
        const humidity = document.getElementsByClassName("humidity");
        const wind_speed = document.getElementsByClassName("wind-speed");
        const temprature = document.getElementsByClassName("temp");
        const pressure = document.getElementsByClassName("pressure");
        const temp_hi_low = document.getElementsByClassName("temp-hi-low");
        const temp_hi_low_text = document.getElementsByClassName("temp-hi-low-text");
        const location = document.getElementsByClassName("weather-location");
        const description = document.getElementsByClassName("description");
        const time_zone = document.getElementsByClassName("time-zone");
        const sun_sit = document.getElementsByClassName("sun-sit");
        const sun_rise = document.getElementsByClassName("sun-rise");
        const timestamp = data.dt * 1000;
        const currentDate = new Date(timestamp);

        // passing API data to DOM elements
        humidity[0].innerHTML = "Humidity: " + data.main.humidity + "%";
        wind_speed[0].innerHTML = "Speed: " + data.wind.speed + " Km/h";
        temprature[0].innerHTML = Math.floor(data.main.temp , "°");
        temp_hi_low_text[0].innerHTML = "Low / High"
        temp_hi_low[0].innerHTML = data.main.temp_min + "/" + data.main.temp_max;
        // pressure[0].innerHTML = data.main.pressure;
        // location[0].innerHTML = data.name;
        description[0].innerHTML = data.weather[0].description;
        // time_zone[0].innerHTML = currentDate.toLocaleTimeString();
        // sun_sit[0].innerHTML = new Date(
        //   data.sys.sunset * 1000
        // ).toLocaleTimeString();
        // sun_rise[0].innerHTML = new Date(
        //   data.sys.sunrise * 1000
        // ).toLocaleTimeString();
      }
    } catch (error) {
      Swal.fire({
        title: "Oh oh",
        text: "You are Offline!",
        icon: "warning",
      });
    }
  };

  return (
    <div className="container">
      <div className="search-container">
          <input
          type="text"
          className="city-input"
          placeholder="London"
          autoFocus
        />  
        <button type="button" className="search-btn" onClick={search}>
          Search
        </button>
      </div>
      <div className="weather-info">
        <div className="weather-icon">
          <img src="https://icons.veryicon.com/png/o/miscellaneous/test-6/weather-91.png" alt=""/>
          <p className="description" style={{textTransform:"capitalize"}}></p>
        </div>
        {/* <div>
          <p className="weather-location"></p>
          <p className="time-zone"></p>
          <p className="sun-sit"></p>
          <p className="sun-rise"></p>
        </div> */}
        <div className="temp-box">
          <p className="temp"></p>
          <span style={{textAlign:"center"}}>
          <p className="temp-hi-low-text"></p>
          <p className="temp-hi-low"></p>
          </span>
        </div>
        <div className="extra-info">
          <p className="wind-speed"></p>
          <p className="pressure"></p>
          <p className="humidity"></p>
        </div>
        {/* <div className="weekly-forecast">
          <div className="forecast-box">
            <img src="" alt="" className="forecast-icon" />
            <p className="temp-hi-low"></p>
            <p className="weekday"></p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default WeatherApp;
