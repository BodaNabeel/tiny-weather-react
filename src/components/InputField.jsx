import React, { useEffect, useRef } from "react";

function InputField({setLocation }) {
  const input = useRef();
  useEffect(() => {
    input.current.addEventListener("keyup", (event) => {
      if (event.keyCode === 13 && input.current.value !== "") {
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
      placeholder="enter place..."
    ></input>
  );
}

export default InputField;
