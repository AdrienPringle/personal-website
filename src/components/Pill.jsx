import React, { Component } from "react";
import "./Pill.css";

class ResumeTile extends Component {
  render() {
    let names;

    //determine which property to use for pill value
    if (this.props.values) {
      names = this.props.values.names;
    }
    if (this.props.name) {
      names = this.props.name;
    }

    //create an array with one item if name passed in is not an array
    if (!Array.isArray(names)) {
      names = [names];
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
