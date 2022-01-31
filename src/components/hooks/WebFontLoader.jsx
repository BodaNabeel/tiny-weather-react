import React, { useEffect } from "react";
import WebFont from "webfontloader";

function WebFontLoader() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Alegreya Sans SC", "Source Sans Pro"],
      },
    });
  }, []);
  return <div></div>;
}

export default WebFontLoader;
