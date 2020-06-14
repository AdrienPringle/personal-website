import React, { Component } from "react";
import "./PageShade.css";

class PageShade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.isScroll ? window.innerHeight : 0,
    };
  }

  fixShade = () => {
    let height = window.innerHeight - 2 * window.pageYOffset;
    if (height < 0) height = 0;
    this.setState({ height: height });
  };

  componentDidMount() {
    if (this.props.isScroll) {
      window.addEventListener("scroll", this.fixShade);
    }
  }

  componentWillUnmount() {
    if (this.props.isScroll) {
      window.removeEventListener("scroll", this.fixShade);
    }
  }
  render() {
    /*let position =
      this.state.yOffset / window.innerHeight >= 1 ? "fixed" : "absolute";
    return <div id="PageShade" className={position}></div>;*/

    return <div className="PageShade" style={{ top: this.state.height }}></div>;
  }
}

export default PageShade;
