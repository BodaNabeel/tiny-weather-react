import React, { useEffect, useRef } from "react";
function InputField({
  location,
  setLocation,
  setWeather,
  setIsLoading,
  weather,
}) {
  useEffect(() => {
    if (location !== "") {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => setWeather(data));

      // .then((data) => console.log(data))
    }
  }, [location, setLocation, setWeather, setIsLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      return setIsLoading(false);
    }, 2000)
    return () => clearTimeout(timer);
  }, [weather]);

  const input = useRef();
  useEffect(() => {
    input.current.addEventListener("keyup", (event) => {
      if (event.keyCode === 13 && input.current.value !== "") {
        setLocation(input.current.value);
        input.current.blur();
        input.current.value = "";
        setIsLoading(true);
      }
    });
  });

  return (
    <input
      ref={input}
      className="input-field"
      type="text"
      maxLength="18"
      placeholder="enter city..."
    ></input>
  );
}

export default InputField;
