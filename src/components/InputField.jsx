import React, { useEffect, useRef } from "react";

function InputField({ location, setLocation, setWeather }) {
  useEffect(() => {
    if (location !== "") {
      const API_KEY = `ab00324bf4bc45a786780155223101`;
      const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => setWeather(data))
        // .then((data) => console.log(data))
    }
  },[location,setLocation,setWeather]);


  const input = useRef();
  useEffect(() => {
    input.current.addEventListener("keyup", (event) => {
      if (event.keyCode === 13 && input.current.value !== "") {
        setLocation(input.current.value);
        input.current.blur();
        input.current.value = ""
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
