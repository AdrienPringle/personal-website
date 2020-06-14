import React, { Component } from "react";
import "./Resume.css";

//import components
import PageShade from "../components/PageShade";
import ResumeTile from "../components/ResumeTile";

class Resume extends Component {
  render() {
    return (
      <div id="Resume" className="Content">
        <PageShade />
        <ResumeTile
          title="Skills"
          content="theres supposed to be content here"
        />
      </div>
    );
  }
}

export default Resume;
