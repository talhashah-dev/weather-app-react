import React, { useState } from "react";

function Weather() {
  const API_KEY = "210eeabe1cac851c368047662c4815fd";
  const [inpValue, setInpValue] = useState("");
  const [weatherData, setWeatherData] = useState("");

  // Function for fetching data from API on key press
  const handleKey = async (event) => {
    if (event.key === "Enter") {
      if (inpValue !== "") {
        console.log("working...");
        try {
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${inpValue}&units=metric&appid=${API_KEY}`;
          let response = await fetch(url);
          let data = await response.json();
          setWeatherData(data);
        } catch (error) {
          console.log("error", error);
        }
      } else {
        console.log("Enter a city name please!");
      }
    }
  };
  
  return (
    <div className="weather">
      <div className="search">
        <input
          type="text"
          className="searchInp"
          placeholder="Search your City"
          onKeyDown={handleKey}
          onChange={(e) => setInpValue(e.target.value)}
        />
      </div>
      <p className="location">{weatherData}</p>
      <p className="temp">26</p>
      <p className="feelsLike">Feels like 26</p>
      <p className="description">Clear</p>
      <p className="humidity">Humidity 28%</p>
      <p className="wind">Wind 31km/h</p>
    </div>
  );
}

export default Weather;
