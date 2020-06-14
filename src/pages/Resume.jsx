import React, { Component } from "react";
import "./Resume.css";

//import components
import PageShade from "../components/PageShade";
import ResumeTile from "../components/ResumeTile";

import resumeItems from "./resumeItems.json";

class Resume extends Component {
  getResumeTiles(condensed) {
    let items = resumeItems.experiences;
    if (condensed) {
      items = items.filter((i) => i.important);
    }
    console.log(items);
    return items.map((i) => (
      <ResumeTile
        key={i.title}
        title={i.title}
        location={i.location}
        dates={i.dates}
        points={i.points}
      />
    ));
  }

  render() {
    return (
      <div id="Resume" className="Content">
        <PageShade />
        <div id="tilesContainer">{this.getResumeTiles(false)}</div>
      </div>
    );
  }
}

export default Resume;
