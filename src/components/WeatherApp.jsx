import Swal from "sweetalert2";
import "../App.css";
import Search from "./Search";


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
        // Getting elements from dom
        const humidity = document.getElementsByClassName("humidity");

        // Passing API data to DOM elements
        humidity[0].innerHTML = "Humidity: " + data.main.humidity + "%";
        wind_speed[0].innerHTML = "Speed: " + data.wind.speed + " Km/h";
        temprature[0].innerHTML = Math.floor(data.main.temp , "°");
        temp_hi_low_text[0].innerHTML = "Low / High"
        temp_hi_low[0].innerHTML = data.main.temp_min + "/" + data.main.temp_max;
        description[0].innerHTML = data.weather[0].description;
      
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
      <Search />
    </div>
  );
}

export default WeatherApp;
