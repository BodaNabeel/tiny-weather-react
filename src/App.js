import WebFontLoader from "./components/hooks/WebFontLoader";
import Header from "./components/Header";
import InputField from "./components/InputField";
import { useState } from "react";
import DefaultContainer from "./components/Container/DefaultContainer";
import MainContainer from "./components/Container/MainContainer";
import SpinnerElement from "./components/hooks/SpinnerElement";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkWeather = (weather) => {
    if(weather) {
      return <MainContainer weather={weather}/>
    } return  <DefaultContainer />
  }
  return (
    <>
      <WebFontLoader />
      <Header location={location} />
      <InputField
        setLocation={setLocation}
        location={location}
        setIsLoading = {setIsLoading}
        isLoading={ isLoading}
        weather= {weather}
        setWeather={setWeather}
      />
      {location && isLoading ? <SpinnerElement/> : checkWeather(weather)}
      <footer> made with ❤ by <a target="_blank" rel="noreferrer" className="link" href="https://www.twitter.com">BodaNabeel</a> </footer>
    </>
  );
}

export default App;
