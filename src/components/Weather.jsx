import React, { useState } from "react";
import Arrow_Up_Icon from "../weather_icons/arrow-up.png";
import Arrow_Down_Icon from "../weather_icons/arrow-down.png";
import Humidity_Icon from "../weather_icons/humidity.png";
import Wind_Icon from "../weather_icons/wind_icon.png";
import Pressure_Icon from "../weather_icons/pressure.png";
import Clear from "../weather_icons/clear.png"
import Wind from "../weather_icons/wind.png"
import Cloudy from "../weather_icons/cloudy.png"
import Lightning from "../weather_icons/lightning.png"
import Haze from "../weather_icons/haze.png"
import Rain from "../weather_icons/rain.png"
import Snow from "../weather_icons/snow.png"

function Weather() {
  // const API_KEY = "210eeabe1cac851c368047662c4815fd";
  const [inpValue, setInpValue] = useState("");
  // const [weatherData, setWeatherData] = useState("");

  // Function for fetching data from API on key press
  const handleKey = async (event) => {
    if (event.key === "Enter") {
      if (inpValue !== "") {
        console.log("working...", inpValue);
        try {
          // let url = `https://api.openweathermap.org/data/2.5/weather?q=${inpValue.replace(/\s/g,"")}&units=metric&appid=${API_KEY}`;
          // let response = await fetch(url);
          // let data = await response.json();
          // setWeatherData(data);
        } catch (error) {
          console.log("error", error);
        }
      } else {
        console.log("Enter a city name please!");
      }
    }
  };

  return (
    <div className="mainWrapper">
      <div className="searchContainer">
        <input
          type="text"
          className="searchInp"
          placeholder="search your location..."
          onKeyDown={handleKey}
          onChange={(e) => setInpValue(e.target.value)}
        />
      </div>

      <div className="mainContainer">
        <div className="header">
          <p>Current Weather</p>
          <button>Change Unit</button>
        </div>

        <div className="currentWeather">
          <div className="basicInfo">
            <p className="location">Karachi, PK</p>
            <div className="iconBox">
              <img
                className="icon"
                width={"100px"}
                src={Rain}
                alt="Weather Icon"
              />
              <p className="temp">26°</p>
            </div>
            <p className="description">Clear</p>
          </div>

          <div className="extraInfo">
            <p className="feelsLike">Feels like 26°</p>
            <div className="tempContainer">
              <div className="tempBox">
                <img src={Arrow_Up_Icon} alt="Arrow Up Icon" />
                <p className="max_temp">26°</p>
              </div>
              <div className="tempBox">
                <img src={Arrow_Down_Icon} alt="Arrow Down Icon" />
                <p className="min_temp">22°</p>
              </div>
            </div>

            <span className="row">
              <img src={Humidity_Icon} alt="" />
              <p className="humidity">Humidity</p>
              <p>28%</p>
            </span>
            <span className="row">
              <img src={Wind_Icon} alt="" />
              <p className="wind"> Wind</p>
              <p>28kmh</p>
            </span>
            <span className="row">
              <img src={Pressure_Icon} alt="" />
              <p className="pressure">Pressure</p>
              <p>28%</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
