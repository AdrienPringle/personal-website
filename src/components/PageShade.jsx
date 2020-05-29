import React, { Component } from "react";
import "./PageShade.css";

class PageShade extends Component {
  state = { height: window.innerHeight };

  fixShade = () => {
    let height = window.innerHeight - 2 * window.pageYOffset;
    if (height < 0) height = 0;
    this.setState({ height: height });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.fixShade);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.fixShade);
  }
  render() {
    /*let position =
      this.state.yOffset / window.innerHeight >= 1 ? "fixed" : "absolute";
    return <div id="PageShade" className={position}></div>;*/

    return <div id="PageShade" style={{ top: this.state.height }}></div>;
  }
}

export default PageShade;
