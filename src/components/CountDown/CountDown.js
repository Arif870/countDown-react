import React from "react";
import Digit from "./Digit/Digit";
import "./count.css";

let CountDown = props => {
  return (
    <div className="count">
      <Digit />
      <Digit />
      <Digit />
    </div>
  );
};

export default CountDown;
