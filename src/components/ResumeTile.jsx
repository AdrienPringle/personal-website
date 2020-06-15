import React, { Component } from "react";
import "./ResumeTile.css";

import Pill from "./Pill";

class ResumeTile extends Component {
  getDates() {
    if (this.props.dates) return this.props.dates.join(" - ");
  }
  getContent() {
    if (this.props.points) {
      return (
        <ul className="tile-points">
          {this.props.points.map((p, index) => (
            <li key={index}>{p}</li>
          ))}
        </ul>
      );
    }
    if (this.props.skills) {
      return (
        <div className="tile-skills">{this.getSkillSet(this.props.skills)}</div>
      );
    }
  }

  getSkillSet(skills) {
    return Object.keys(skills).map((key) => (
      <div className="skill-set" key={key}>
        <div className="skill-name">
          {" "}
          {key.split(" ").map((w) => (
            <span key={w}>{w}</span>
          ))}{" "}
        </div>
        {skills[key].map((values, index) => (
          <Pill key={index} values={values} />
        ))}
      </div>
    ));
  }

  render() {
    return (
      <div className="resume-tile">
        <div className="tile-background">
          <div className="tile-header">
            <div className="tile-title">{this.props.title}</div>
            <div className="tile-data">
              <div className="tile-location">{this.props.location}</div>
              <div className="tile-date">{this.getDates()}</div>
            </div>
          </div>
          <div className="tile-content">{this.getContent()}</div>
        </div>
      </div>
    );
  }
}

export default ResumeTile;
