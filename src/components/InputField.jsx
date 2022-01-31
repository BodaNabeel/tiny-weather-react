import React, { useEffect, useRef } from "react";

function InputField({ location,setLocation, fetchAPI }) {
  const input = useRef();
  useEffect(() => {
    input.current.addEventListener("keyup", (event) => {
      if (event.keyCode === 13 && input.current.value !== "") {
        fetchAPI(location);
        setLocation(input.current.value);
        input.current.blur();
      }
    });
  });

  return (
    <input
      ref={input}
      className="input-field"
      type="text"
      maxLength="18"
      onChange={(e) => setLocation(e.target.value)}
      placeholder="enter place..."
    ></input>
  );
}

export default InputField;
