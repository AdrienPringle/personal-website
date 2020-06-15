import React, { Component } from "react";
import "./Switch.css";

class Resume extends Component {
  render() {
    return (
      <div className="switch">
        <label className="slider">
          <input
            name="showCondensed"
            type="checkbox"
            onClick={this.props.handleClick}
          ></input>
          <span className="slider"></span>
          <div className="slider-label">{this.props.text}</div>
        </label>
      </div>
    );
  }
}

export default Resume;
