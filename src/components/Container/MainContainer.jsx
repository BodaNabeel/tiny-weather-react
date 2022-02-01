import React from "react";
import ErrorContainer from "./ErrorContainer";
import WeatherContainer from "./WeatherContainer";

function MainContainer({ weather }) {
  
  return (
    <div className="container">
      {weather.location ? (
        <WeatherContainer weather={weather} />
      ) : (
        <ErrorContainer weather={weather} />
      )}
    </div>
  );
}

export default MainContainer;
