import React, { Component } from "react";
import "./Pill.css";

class ResumeTile extends Component {
  render() {
    return (
      <div className="Pill">
        {this.props.values.names.map((i) => (
          <div className="inner-pill" key={i}>
            {i}
          </div>
        ))}
      </div>
    );
  }
}

export default ResumeTile;
