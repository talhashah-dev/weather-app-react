import React, { useState, useEffect } from "react";
import Arrow_Up_Icon from "../weather_icons/arrow-up.png";
import Arrow_Down_Icon from "../weather_icons/arrow-down.png";
import Humidity_Icon from "../weather_icons/humidity.png";
import Wind_Icon from "../weather_icons/wind_icon.png";
import Pressure_Icon from "../weather_icons/pressure.png";
import Clear from "../weather_icons/clear.png";
import Wind from "../weather_icons/wind.png";
import Cloudy from "../weather_icons/cloudy.png";
import Lightning from "../weather_icons/lightning.png";
import Haze from "../weather_icons/haze.png";
import Rain from "../weather_icons/rain.png";
import Snow from "../weather_icons/snow.png";

function Weather() {
  const API_KEY = "210eeabe1cac851c368047662c4815fd";
  const [inpValue, setInpValue] = useState("");
  const [defaultData, setDefaultData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const defaultCall = async () => {
    setIsLoading(true);
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&appid=${API_KEY}`;
      let response = await fetch(url);
      let data = await response.json();
      // console.log(data);
      setDefaultData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    defaultCall();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <img
            src="https://www.justbringthechocolate.com/wp-content/plugins/out-of-the-box/css/clouds/cloud_loading_256.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="mainWrapper">
          <div className="searchContainer">
            <input
              type="text"
              className="searchInp"
              placeholder="search your location..."
              onChange={(e) => setInpValue(e.target.value)}
            />
          </div>

          <div className="mainContainer">
            <div className="header">
              <p>Current Weather</p>
              <button>Change Unit</button>
            </div>

            <div className="currentWeather">
              {defaultData && (
                <div className="basicInfo">
                  <p className="location">{`${defaultData.name}, ${defaultData.sys.country}`}</p>
                  <div className="iconBox">
                    <img
                      className="icon"
                      width={"100px"}
                      src={Rain}
                      alt="Weather Icon"
                    />
                    <p className="temp">{`${Math.floor(
                      defaultData.main.temp
                    )}°`}</p>
                  </div>
                  <p className="description">{`${defaultData.weather[0].description}`}</p>
                </div>
              )}

              {defaultData && (
                <div className="extraInfo">
                  <p className="feelsLike">{`Feels like ${Math.floor(
                    defaultData.main.feels_like
                  )}°`}</p>
                  <div className="tempContainer">
                    <div className="tempBox">
                      <img src={Arrow_Up_Icon} alt="Arrow Up Icon" />
                      <p className="max_temp">{`${defaultData.main.temp_max}°`}</p>
                    </div>
                    <div className="tempBox">
                      <img src={Arrow_Down_Icon} alt="Arrow Down Icon" />
                      <p className="min_temp">{`${defaultData.main.temp_min}°`}</p>
                    </div>
                  </div>

                  <span className="row">
                    <img src={Humidity_Icon} alt="" />
                    <p className="humidity">Humidity</p>
                    <p>{`${defaultData.main.humidity}%`}</p>
                  </span>
                  <span className="row">
                    <img src={Wind_Icon} alt="" />
                    <p className="wind"> Wind</p>
                    <p>{`${defaultData.wind.speed}km/h`}</p>
                  </span>
                  <span className="row">
                    <img src={Pressure_Icon} alt="" />
                    <p className="pressure">Pressure</p>
                    <p>{`${defaultData.main.pressure}%`}</p>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Weather;
