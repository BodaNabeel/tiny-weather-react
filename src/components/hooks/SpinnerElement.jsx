import React from "react";
import { DotLoader } from "react-spinners";
function SpinnerElement() {
  return (
    <div className="container">
      <div className="loader-icon">
        <DotLoader color="#80c1c0" size="65px" loading />
      </div>
    </div>
  );
}

export default SpinnerElement;
