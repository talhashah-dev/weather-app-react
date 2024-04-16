import React, { useState } from "react";

function Weather() {
  const API_KEY = "210eeabe1cac851c368047662c4815fd";
  const [inpValue, setInpValue] = useState("");
  const [weatherData, setWeatherData] = useState("");

  // Function for fetching data from API on key press
  const handleKey = async (event) => {
    if (event.key === "Enter") {
      if (inpValue !== "") {
        console.log("working...", inpValue);
        try {
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${inpValue.replace(
            /\s/g,
            ""
          )}&units=metric&appid=${API_KEY}`;
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkPC6jNO4CP_14rB_W8VmlfpvF0uCuG2fU9z7geagHg&s"
                alt="Weather Icon"
              />
              <p className="temp">26</p>
            </div>
            <p className="description">Clear</p>
          </div>

          <div className="extraInfo">
            <p className="feelsLike">Feels like 26</p>
            <div className="tempContainer">
              <div className="tempBox">
                <img width={"20px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkPC6jNO4CP_14rB_W8VmlfpvF0uCuG2fU9z7geagHg&s" alt="" />
                <p className="max_temp">26</p>
              </div>
              <div className="tempBox">
                <img width={"20px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkPC6jNO4CP_14rB_W8VmlfpvF0uCuG2fU9z7geagHg&s" alt="" />
                <p className="max_temp">26</p>
              </div>
            </div>

            <p className="humidity row"><img width={"20px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkPC6jNO4CP_14rB_W8VmlfpvF0uCuG2fU9z7geagHg&s" alt="" /> Humidity <p>28%</p></p>
            <p className="wind row"><img width={"20px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkPC6jNO4CP_14rB_W8VmlfpvF0uCuG2fU9z7geagHg&s" alt="" /> Wind <p>28kmh</p></p>
            <p className="pressure row"><img width={"20px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkPC6jNO4CP_14rB_W8VmlfpvF0uCuG2fU9z7geagHg&s" alt="" /> Pressure <p>28%</p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
