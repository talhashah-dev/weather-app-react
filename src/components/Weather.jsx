import React, { useState } from "react";

function Weather() {
  const api_key = "210eeabe1cac851c368047662c4815fd";
  const [inpValue, setInpValue] = useState(null);

  const handleKey = async (event) => {
    if (event.key === "Enter") {
      if (inpValue.trim() !== "") {
        try {
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${inpValue}&units=metric&appid=${api_key}`;
          let response = await fetch(url);
          let data = await response.json();
          console.log("result", data); // Log the fetched data

          // Optionally handle the fetched data further here
        } catch (error) {
          console.log("error", error);
        }
      } else {
        console.log("Enter a city name please!");
      }
    }
  }

  const search = async () => {
    console.log("Enter key pressed...")
    // try-catch method used for API call and error handling
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${inpValue}&units=metric&appid=${api_key}`;
      let response = await fetch(url);
      let data = await response.json();
      console.log("result", data)
    } catch (error) {
      console.log("error", error)
    }
  };

  return (
    <div className="weather">
      <div className="search">
      <input type="text" className="searchInp" placeholder="Search your City" onKeyDown={handleKey} onChange={(e) => setInpValue(e.target.value)} />
      </div>
      <p className="location">London</p>
      <p className="temp">26</p>
      <p className="feelsLike">Feels like 26</p>
      <p className="description">Clear</p>
      <p className="humidity">Humidity 28%</p>
      <p className="wind">Wind 31km/h</p>
    </div>
  );
}

export default Weather;
