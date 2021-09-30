import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const changeToHex = rgbToHex(...rgb);
  useEffect(() => {
    return () => {
      let setTime = setTimeout(() => {
        setAlert(false);
      }, 3000);
      return () => clearTimeout(setTime);
    };
  }, [alert]);
  return (
    <article
      className={`color-card ${index > 10 && "color-light"}`}
      style={{
        backgroundColor: `rgb(${bcg})`,
      }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(changeToHex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p>{changeToHex}</p>
      {alert && <p>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
