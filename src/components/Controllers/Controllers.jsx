import React from "react";
import "./Controller.css";

class Controller extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: true,
      pause: false,
      lap: false,
      reset: false,
    };
  }
  startCount() {
    this.setState({
      ...this.state,
      start: false,
      pause: true,
      lap: true,
    });
  }

  pauseHandaler() {
    this.setState({
      ...this.state,
      start: true,
      pause: false,
      reset: true,
    });
  }
  lapHandaler() {}

  resetHandaler() {
    this.setState({
      start: true,
      pause: false,
      lap: false,
      reset: false,
    });
  }

  getController() {
    let output = null;

    if (this.state.start && !this.state.reset) {
      output = (
        <div className="start">
          <button onClick={event => this.startCount()}>Start</button>
        </div>
      );
    } else if (this.state.pause && this.state.lap) {
      output = (
        <div className="start">
          <button
            style={{ backgroundColor: "purple" }}
            onClick={event => this.pauseHandaler()}
          >
            Pause
          </button>
          <button
            style={{ marginLeft: "20px", backgroundColor: "tomato" }}
            onClick={event => this.lapHandaler()}
          >
            Lap
          </button>
        </div>
      );
    } else if (this.state.reset && this.state.start) {
      output = (
        <div className="start">
          <button
            style={{ backgroundColor: "green" }}
            onClick={event => this.startCount()}
          >
            Start
          </button>
          <button
            style={{ marginLeft: "20px", backgroundColor: "cadetBlue" }}
            onClick={event => this.resetHandaler()}
          >
            Reset
          </button>
        </div>
      );
    }
    return output;
  }

  render() {
    return this.getController();
  }
}

export default Controller;
