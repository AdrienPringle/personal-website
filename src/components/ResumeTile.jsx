import React, { Component } from "react";
import "./ResumeTile.css";

class ResumeTile extends Component {
  render() {
    return (
      <div className="resume-tile">
        <div className="tile-background">
          <div className="tile-header">
            <div className="tile-title">{this.props.title}</div>
            <div className="tile-data">
              <div className="tile-location">{this.props.location}</div>
              <div className="tile-date">{this.props.dates.join(" - ")}</div>
            </div>
          </div>
          <div className="tile-content">
            <ul className="tile-points">
              {this.props.points.map((p, index) => (
                <li key={index}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeTile;
