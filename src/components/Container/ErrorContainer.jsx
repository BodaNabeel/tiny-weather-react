import React from "react";
import { ImSad } from "react-icons/im";

function ErrorContainer({ weather }) {
  return (
    <div className="error-msg">
      <h2 className="error-msg__title">{weather.error.message}</h2>
      <ImSad className="error-msg__icon" />
    </div>
  );
}

export default ErrorContainer;
