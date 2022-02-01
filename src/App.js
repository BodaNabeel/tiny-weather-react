import WebFontLoader from "./components/hooks/WebFontLoader";
import Header from "./components/Header";
import InputField from "./components/InputField";
import { useState } from "react";
import DefaultContainer from "./components/Container/DefaultContainer";
import MainContainer from "./components/Container/MainContainer";

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
      {weather ? <MainContainer weather={weather} /> : <DefaultContainer />}
    </>
  );
}

export default App;
