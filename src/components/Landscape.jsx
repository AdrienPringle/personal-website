import React, { Component } from "react";
import l1 from "./l1.svg";
import l2 from "./l2.svg";
import l3 from "./l3.svg";
import "./Landscape.css";

class Landscape extends Component {
  getPosition(tab, z) {
    return (-60 - tab * 10 / z / z) + "rem"
  }
  render() {
    return <div id="landscape-container">
      <img id="l3" alt="" className="Landscape" src={l3} style={{ marginLeft: this.getPosition(this.props.tab, 3) }}></img>
      <img id="l2" alt="" className="Landscape" src={l2} style={{ marginLeft: this.getPosition(this.props.tab, 2) }}></img>
      <img id="l1" alt="" className="Landscape" src={l1} style={{ marginLeft: this.getPosition(this.props.tab, 1) }}></img>
    </div>;
  }
}

export default Landscape;
