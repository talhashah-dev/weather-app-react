import React from "react";
import "../App.css";
import Arrow_Up_Icon from "../weather_icons/arrow-up.png";
import Arrow_Down_Icon from "../weather_icons/arrow-down.png";
import Humidity_Icon from "../weather_icons/humidity.png";
import Wind_Icon from "../weather_icons/wind_icon.png";
import Clear from "../weather_icons/clear.png";
import Wind from "../weather_icons/wind.png";
import Cloudy from "../weather_icons/cloudy.png";
import Lightning from "../weather_icons/lightning.png";
import Haze from "../weather_icons/haze.png";
import Rain from "../weather_icons/rain.png";
import Snow from "../weather_icons/snow.png";

function Forecast({ value }) {
  const forecastData = value;
  const icons = [Clear, Wind, Cloudy, Lightning, Haze, Rain, Snow];
  return (
    <div className="foreCast mainContainer">
      {/* <div className="header">
        <p>Forecast</p>
      </div>

      <div className="CardSlider">
        <div className="cardBody">
          <img src={Clear} alt="" className="cardImg icon" />
          <p className="description">
            {forecastData.list[0].weather[0].description}
          </p>
          <div className="row">
            <img src={Arrow_Up_Icon} alt="Arrow Up Icon" />
            <p>{`${forecastData.list[0].main.temp_max}°`}</p>
            <img src={Arrow_Down_Icon} alt="Arrow Down Icon" />
            <p>{`${forecastData.list[0].main.temp_min}°`}</p>
          </div>
          <span className="row">
            <img src={Humidity_Icon} alt="" />
            <p>{`${forecastData.list[0].main.humidity}%`}</p>
          </span>
          <span className="row">
            <img src={Wind_Icon} alt="" />
            <p>{`${forecastData.list[0].wind.speed}km/h`}</p>
          </span>
        </div>

        <div className="cardBody">
          <img src={Clear} alt="" className="cardImg icon" />
          <p className="description">
            {forecastData.list[0].weather[0].description}
          </p>
          <div className="row">
            <img src={Arrow_Up_Icon} alt="Arrow Up Icon" />
            <p>{`${forecastData.list[0].main.temp_max}°`}</p>
            <img src={Arrow_Down_Icon} alt="Arrow Down Icon" />
            <p>{`${forecastData.list[0].main.temp_min}°`}</p>
          </div>
          <span className="row">
            <img src={Humidity_Icon} alt="" />
            <p>{`${forecastData.list[0].main.humidity}%`}</p>
          </span>
          <span className="row">
            <img src={Wind_Icon} alt="" />
            <p>{`${forecastData.list[0].wind.speed}km/h`}</p>
          </span>
        </div>

        <div className="cardBody">
          <img src={Clear} alt="" className="cardImg icon" />
          <p className="description">
            {forecastData.list[0].weather[0].description}
          </p>
          <div className="row">
            <img src={Arrow_Up_Icon} alt="Arrow Up Icon" />
            <p>{`${forecastData.list[0].main.temp_max}°`}</p>
            <img src={Arrow_Down_Icon} alt="Arrow Down Icon" />
            <p>{`${forecastData.list[0].main.temp_min}°`}</p>
          </div>
          <span className="row">
            <img src={Humidity_Icon} alt="" />
            <p>{`${forecastData.list[0].main.humidity}%`}</p>
          </span>
          <span className="row">
            <img src={Wind_Icon} alt="" />
            <p>{`${forecastData.list[0].wind.speed}km/h`}</p>
          </span>
        </div>

        <div className="cardBody">
          <img src={Clear} alt="" className="cardImg icon" />
          <p className="description">
            {forecastData.list[0].weather[0].description}
          </p>
          <div className="row">
            <img src={Arrow_Up_Icon} alt="Arrow Up Icon" />
            <p>{`${forecastData.list[0].main.temp_max}°`}</p>
            <img src={Arrow_Down_Icon} alt="Arrow Down Icon" />
            <p>{`${forecastData.list[0].main.temp_min}°`}</p>
          </div>
          <span className="row">
            <img src={Humidity_Icon} alt="" />
            <p>{`${forecastData.list[0].main.humidity}%`}</p>
          </span>
          <span className="row">
            <img src={Wind_Icon} alt="" />
            <p>{`${forecastData.list[0].wind.speed}km/h`}</p>
          </span>
        </div>
      </div> */}
    </div>
  );
}

export default Forecast;
