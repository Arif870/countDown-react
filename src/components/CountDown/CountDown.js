import React from "react";
import Digit from "./Digit/Digit";
import "./count.css";

let CountDown = props => {
  return (
    <div className="count">
      <Digit color="#6b966b" value={props.time.min} />
      <Digit color="skyblue" value={props.time.sec} />
      <Digit color="salmon" value={props.time.mili} />
    </div>
  );
};

export default CountDown;
