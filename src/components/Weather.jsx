import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Forecast from "./Forecast";

import Arrow_Up_Icon from "../weather_icons/arrow-up.png";
import Arrow_Down_Icon from "../weather_icons/arrow-down.png";
import Humidity_Icon from "../weather_icons/humidity.png";
import Wind_Icon from "../weather_icons/wind.png";
import Pressure_Icon from "../weather_icons/pressure.png";
import Clear from "../weather_icons/clear.png";
import Wind from "../weather_icons/wind.png";
import Cloudy from "../weather_icons/cloudy.png";
import Lightning from "../weather_icons/lightning.png";
import Haze from "../weather_icons/haze.png";
import Rain from "../weather_icons/rain.png";
import Snow from "../weather_icons/snow.png";
import Search_icon from "../weather_icons/search-icon.png";

function Weather() {
  const [inpValue, setInpValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState({});
  const [error, setError] = useState("");
  const notify = () => {
    toast.error(`${error}`, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };
  const [progress, setProgress] = useState(0);
  const icons = [Clear, Wind, Cloudy, Lightning, Haze, Rain, Snow];
  const api = {
    key: "210eeabe1cac851c368047662c4815fd",
    url: "https://api.openweathermap.org/data/2.5/weather?",
    forecast_url: "https://api.openweathermap.org/data/2.5/forecast?",
  };

  // Icon change function
  /* eslint-disable no-unreachable */
  const setIcons = (weatherData) => {
    switch (weatherData) {
      case "clear sky":
        return icons[0];
        break;

      case "few clouds":
        return icons[2];
        break;

      case "scattered clouds":
        return icons[2];
        break;

      case "drizzle":
        return icons[2];
        break;

      case "overcast clouds":
        return icons[2];
        break;

      case "broken clouds":
        return icons[2];
        break;

      case "shower rain":
        return icons[5];
        break;

      case "light rain":
        return icons[5];
        break;

      case "moderate rain":
        return icons[5];
        break;

      case "rain":
        return icons[5];
        break;

      case "thunderstorm":
        return icons[3];
        break;

      case "snow":
        return icons[6];
        break;

      case "light snow":
        return icons[6];
        break;

      case "haze":
        return icons[4];
        break;

      case "smoke":
        return icons[4];
        break;

      default:
        break;
    }
  };

  /* eslint-enable no-unreachable */

  const forecastCall = async () => {
    try {
      const forecast_response = await fetch(
        `${api.forecast_url}appid=${api.key}&q=karachi&units=metric`
      );
      const forecast_data = await forecast_response.json();
      setForecastData(forecast_data);
    } catch (error) {
      error.message === "Failed to fetch"
        ? setError("Check your connection!")
        : setError(error.message);
    }
  };

  // default API call function
  const defaultCall = async () => {
    try {
      forecastCall();
      setProgress(progress);
      let response = await fetch(
        `${api.url}appid=${api.key}&q=karachi&units=metric`
      );
      let data = await response.json();
      setWeatherData(data);
    } catch (error) {
      error.message === "Failed to fetch"
        ? setError("Check your connection!")
        : setError(error.message);
    } finally {
      setProgress(100);
    }
  };

  useEffect(() => {
    defaultCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // API call function on key press
  const handleKey = async (event) => {
    if (event.key === "Enter") {
      if (inpValue !== "") {
        try {
          let response = await fetch(
            `${api.url}appid=${api.key}&q=${inpValue}&units=metric`
          );
          let data = await response.json();
          if (data.cod === "404") {
            setError("City Not Found!");
            return;
          } else {
            setWeatherData(data);
          }
        } catch (error) {
          error.message === "Failed to fetch"
            ? setError("Check your connection!")
            : setError(error.message);
        }
      } else {
        setError("Please enter a City name!");
      }
    }
  };

  return (
    <>
      <LoadingBar color="#6F74A4" progress={100} />
      <ToastContainer />
      <div className="mainWrapper">
        <div className="searchContainer">
          <input
            type="text"
            className="searchInp"
            placeholder="search your location..."
            onKeyDown={handleKey}
            onChange={(e) => setInpValue(e.target.value)}
          />
          <span className="searchIconBox">
            <img src={Search_icon} alt="Search Icon" onClick={handleKey} />
          </span>
        </div>

        {error &&
          toast.error(`${error}`, {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
            transition: Slide,
          })}

        <div className="mainContainer">
          <div className="header">
            <p>Current Weather</p>
            <button onClick={() => handleKey(inpValue)}>Change Unit</button>
          </div>

          <div className="currentWeather">
            {weatherData && (
              <div className="basicInfo">
                <p className="location">{`${weatherData.name}, ${weatherData.sys.country}`}</p>
                <div className="iconBox">
                  <img
                    className="icon"
                    width={"100px"}
                    src={setIcons(weatherData.weather[0].description)}
                    alt="Weather Icon"
                  />
                  <p className="temp">{`${Math.floor(
                    weatherData.main.temp
                  )}°`}</p>
                </div>
                <p className="description">{`${weatherData.weather[0].description}`}</p>
              </div>
            )}

            {weatherData && (
              <div className="extraInfo">
                <p className="feelsLike">{`Feels like ${Math.floor(
                  weatherData.main.feels_like
                )}°`}</p>
                <div className="tempContainer">
                  <div className="tempBox">
                    <img src={Arrow_Up_Icon} alt="Arrow Up Icon" />
                    <p className="max_temp">{`${weatherData.main.temp_max}°`}</p>
                  </div>
                  <div className="tempBox">
                    <img src={Arrow_Down_Icon} alt="Arrow Down Icon" />
                    <p className="min_temp">{`${weatherData.main.temp_min}°`}</p>
                  </div>
                </div>

                <span className="row">
                  <img src={Humidity_Icon} alt="" />
                  <p className="humidity">Humidity</p>
                  <p>{`${weatherData.main.humidity}%`}</p>
                </span>
                <span className="row">
                  <img src={Wind_Icon} alt="" />
                  <p className="wind"> Wind</p>
                  <p>{`${weatherData.wind.speed}km/h`}</p>
                </span>
                <span className="row">
                  <img src={Pressure_Icon} alt="" />
                  <p className="pressure">Pressure</p>
                  <p>{`${weatherData.main.pressure}%`}</p>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
