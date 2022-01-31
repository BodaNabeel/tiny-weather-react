import WebFontLoader from "./components/hooks/WebFontLoader";
import Header from "./components/Header";
import InputField from "./components/InputField";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState();

  const fetchAPI = (location) => {
    const API_KEY = `ab00324bf4bc45a786780155223101`
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;

    fetch(url)
    .then(res => res.json())
    .then(data => setWeather(data))
  }

  return (
    <>
      <WebFontLoader />
      <Header location={location} />
      <InputField location={location} setLocation={setLocation} />
    </> 
  );   
}

export default App;
