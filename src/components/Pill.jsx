import React, { Component } from "react";
import "./Pill.css";

class ResumeTile extends Component {
  render() {
    let names;

    if (this.props.values) {
      names = this.props.values.names;
    }
    if (this.props.name) {
      names = [this.props.name];
    }
    return (
      <div className="Pill">
        {names.map((i) => (
          <div className="inner-pill" key={i}>
            {i}
          </div>
        ))}
      </div>
    );
  }
}

export default ResumeTile;
