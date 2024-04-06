import React from "react";

function Weather() {
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
        // Getting elements from dom
        const humidity = document.getElementsByClassName("humidity");

        // Passing API data to DOM elements
        humidity[0].innerHTML = "Humidity: " + data.main.humidity + "%";
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
    <div className="weather">
      <div className="tempBox">
        <p className="location">London</p>
        <div>
          <p className="temp">26</p>
          <div className="tempIcon">ICON</div>
        </div>
        <p className="feelsLike">Feels like 26</p>
      </div>
      <div className="extraInfoBox">
        <h3 className="description">Clear</h3>
        <p className="pressure">Precip: 0%</p>
        <p className="humidity">Humidity: 28%</p>
        <p className="wind">Wind: 31 km/h</p>
      </div>
    </div>
  );
}

export default Weather;
