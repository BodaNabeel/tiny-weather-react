import WebFontLoader from "./components/hooks/WebFontLoader";
import Header from "./components/Header";
import InputField from "./components/InputField";
import { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");

  // const fetchAPI = (location) => {
  //   const API_KEY = `ab00324bf4bc45a786780155223101`;
  //   const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  return (
    <>
      <WebFontLoader />
      <Header location={location} />
      <InputField
        setLocation={setLocation}
        location={location}
        // fetchAPI={fetchAPI}
        setWeather={setWeather}
      />
      <p>{weather.location? weather.location.name : "error"}</p>
    </>
  );
}

export default App;
