import React, { Component } from "react";
import img from "./landscape.svg";
import "./Landscape.css";

class Landscape extends Component {
  render() {
    return <img className="Landscape" src={img}></img>;
  }
}

export default Landscape;
