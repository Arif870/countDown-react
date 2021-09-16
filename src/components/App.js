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
      laps: [],
    };
  }

  getStart() {
    this.setIntervalId = setInterval(() => {
      let min = this.state.time.min;
      let sec = this.state.time.sec;
      let mili = this.state.time.mili;

      if (mili > 99) {
        sec = sec + 1;
        mili = 0;
      }
      if (sec > 60) {
        min = min + 1;
        sec = 0;
      }
      this.setState({
        ...this.state,
        time: {
          min,
          sec,
          mili: mili + 1,
        },
      });
    }, 10);
  }

  getPause() {
    clearInterval(this.setIntervalId);
  }
  getReset() {
    this.setState({
      time: {
        min: 0,
        sec: 0,
        mili: 0,
      },
    });
  }

  getLap() {
    let time = {
      ...this.state.time,
    };
    this.setState({
      ...this.state,
      laps: [time, ...this.state.laps],
    });

    console.log(this.state.laps);
  }
  render() {
    return (
      <div className="App">
        <Title />
        <CountDown time={this.state.time} />
        <Controller
          start={this.getStart.bind(this)}
          pause={this.getPause.bind(this)}
          reset={this.getReset.bind(this)}
          lap={this.getLap.bind(this)}
        />
      </div>
    );
  }
}

export default App;
