import React, { Component } from "react";
import "./App.css";
import Title from "./Title/Title.jsx";
import CountDown from "./CountDown/CountDown";
import Controller from "./Controllers/Controllers";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: {
        min: 0,
        sec: 0,
        mili: 0,
      },
    };
  }

  render() {
    return (
      <div className="App">
        <Title />
        <CountDown time={this.state.time} />
        <Controller />
      </div>
    );
  }
}

export default App;
