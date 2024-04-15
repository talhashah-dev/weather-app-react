import React from "react";

function Weather() {
  const api_key = "210eeabe1cac851c368047662c4815fd";
  const cityInput = document.querySelector("searchInp");

  const handleKey = (event) => {
    if(event.key === "Enter"){
      search();
    }
  }

  const search = async () => {
    console.log("Enter key pressed...")
    console.log(cityInput)
    // try-catch method used for API call and error handling
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${api_key}`;
      let response = await fetch(url);
      let data = await response.json();
      console.log("result", data)
    } catch (error) {
      console.log("error", error)
    }
  };

  return (
    <div className="weather">
      <input type="text" className="searchInp" placeholder="Search your City" onKeyPress={handleKey} />
      <button onClick={search}>Search</button>
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
