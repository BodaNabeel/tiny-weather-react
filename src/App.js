import WebFontLoader from "./components/hooks/WebFontLoader";
import Header from "./components/Header";
import InputField from "./components/InputField";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  return (
    <>
      <WebFontLoader />
      <Header location={location} />
      <InputField location={location} setLocation={setLocation} />
    </> 
  );   
}

export default App;
