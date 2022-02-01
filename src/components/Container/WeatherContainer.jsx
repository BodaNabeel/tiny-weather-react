import React from "react";
import {BiWind} from "react-icons/bi"
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoWaterOutline } from "react-icons/io5";
import { SiSpeedtest } from "react-icons/si";
function WeatherContainer({ weather }) {
  const locatTime = weather.location.localtime.split(" ");
  return (   
    <>
      <div className="weather-top">
        <p className="weather-title">
          {`${weather.current.feelslike_c}°C`}
          <span className="weather-description">{` | ${weather.current.condition.text}`}</span>
        </p>
        <img
          src={weather.current.condition.icon}
          alt=""
          className="weather-icon"
        />
      </div>
      <h2 className="weather-txt">
        {weather.location.name}, {weather.location.country}
      </h2>
      <p className="weather-info__title">Weather Info</p>
      <div className="weather-info">
        <div className="weather-info__container">
          <IoWaterOutline className="icon" />
          <div className="content">
            <p className="content-detail">
              {weather.current.humidity}{" "}
              <span className="content-title">Humidity</span>
            </p>
          </div>
        </div>
        <div className="weather-info__container">
          <BiWind className="icon" />
          <div className="content">
            <p className="content-detail">
              {weather.current.wind_kph}{" "}
              <span className="content-title">Wind</span>
            </p>
          </div>
        </div>
        <div className="weather-info__container">
          <SiSpeedtest className="icon" />
          <div className="content">
            <p className="content-detail">
              {weather.current.pressure_in}
              <span className="content-title">Pressure</span>
            </p>
          </div>
        </div>
        <div className="weather-info__container">
          <AiOutlineClockCircle className="icon" />
          <div className="content">
            <p className="content-detail">
              {locatTime[1]} <span className="content-title">Time</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherContainer;
