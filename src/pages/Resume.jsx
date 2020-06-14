import React, { Component } from "react";
import "./Resume.css";

//import components
import PageShade from "../components/PageShade";
import ResumeTile from "../components/ResumeTile";
import Switch from "../components/Switch";

import resumeItems from "./resumeItems.json";
import { ReactComponent as PDFIcon } from "./document.svg";

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
        <div id="resumeHead">
          <div id="resumeTitle">
            <div id="resumeName">Adrien Pringle</div>
            <div id="resumeSub">
              <div>BEng. in Compunter Engineering</div>
              <div id="seperator"> | </div>
              <div>University of Waterloo 2024</div>
            </div>
          </div>
          <div id="resumeOptions">
            <Switch text="Show Condensed" />
            <button id="openPDFButton" type="button">
              <PDFIcon />
              <span>Open PDF</span>
            </button>
          </div>
        </div>
        <div id="tilesContainer">{this.getResumeTiles(false)}</div>
      </div>
    );
  }
}

export default Resume;
