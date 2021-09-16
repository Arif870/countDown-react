import React from "react";
import "./digit.css";

let Digit = props => {
  return (
    <div className="digit" style={{ borderColor: props.color }}>
      <p style={{ color: props.color }}>
        {props.value < 10 ? `0${props.value}` : props.value}
      </p>
    </div>
  );
};

export default Digit;
