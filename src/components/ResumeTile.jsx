import React, { Component } from "react";
import "./ResumeTile.css";

class ResumeTile extends Component {
  render() {
    return (
      <div className="resume-tile">
        <div className="tile-background">
          <div className="title">{this.props.title}</div>
          <div className="tile-content"> {this.props.content}</div>
        </div>
      </div>
    );
  }
}

export default ResumeTile;
