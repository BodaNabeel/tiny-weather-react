import React from 'react';

function WeatherContainer({weather}) {
  const locatTime = weather.location.localtime.split(" ")
  console.log(locatTime[1])
  return (
    <>
    <div className="weather-top">
      <p className='weather-title'>{`${weather.current.feelslike_c}°C | ${weather.current.condition.text}`}</p>
      <img src={weather.current.condition.icon} alt="" className="weather-icon" />
    </div>
    <h2 className="weather-txt">{weather.location.name}, {weather.location.country}</h2>
    <div className="weather-info">
      <p className="weather-info__title">Weather Info</p>
      <div className="weather-info__container">
        <img src={weather.current.condition.icon} alt="" className="icon" />
        <div className="content">
          <p className="content-detail">{weather.current.humidity}</p>
          <p className="content-title">Humidity</p>
        </div>
      </div>
      <div className="weather-info__container">
        <img src={weather.current.condition.icon} alt="" className="icon" />
        <div className="content">
          <p className="content-detail">{weather.current.wind_kph}</p>
          <p className="content-title">Wind</p>
        </div>
      </div>
      <div className="weather-info__container">
        <img src={weather.current.condition.icon} alt="" className="icon" />
        <div className="content">
          <p className="content-detail">{weather.current.pressure_in}</p>
          <p className="content-title">Pressure</p>
        </div>
      </div>
      <div className="weather-info__container">
        <img src={weather.current.condition.icon} alt="" className="icon" />
        <div className="content">
          <p className="content-detail">{locatTime[1]}</p>
          <p className="content-title">Time</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default WeatherContainer;
