import React, { Component } from "react";
import "./Title.css";

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Stop Watch by React JS",
      isInput: false,
    };
  }

  editHandaler() {
    this.setState({
      ...this.state,
      isInput: true,
    });
  }
  inputChange(event) {
    this.setState({
      ...this.state,
      title: event.target.value,
    });
  }

  enterPress(event) {
    if (event.key === "Enter") {
      this.setState({
        ...this.state,
        isInput: false,
      });
    }
  }

  blurEvent(event) {
    this.setState({
      ...this.state,
      isInput: false,
    });
  }

  render() {
    let output = null;

    if (this.state.isInput) {
      output = (
        <input
          className="input"
          type="text"
          on
          value={this.state.title}
          onChange={event => this.inputChange(event)}
          onKeyPress={event => this.enterPress(event)}
          onBlur={event => this.blurEvent(event)}
        />
      );
    } else {
      output = (
        <div>
          <div className="main">
            <h1>{this.state.title}</h1>
            <span onClick={() => this.editHandaler()}>
              <i className="fas fa-pen-fancy edit"></i>
            </span>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h1>{output}</h1>
      </div>
    );
  }
}

export default Title;
