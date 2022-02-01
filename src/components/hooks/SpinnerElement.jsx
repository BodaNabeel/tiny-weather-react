import React from "react";
import { BounceLoader, ClockLoader, MoonLoader,ClipLoader, DotLoader
} from "react-spinners";
function SpinnerElement() {
  return (
    <div className="container">
      <div className="loader-icon">
        <DotLoader color="#80c1c0" size="65" loading />
      </div>
    </div>
  );
}

export default SpinnerElement;
