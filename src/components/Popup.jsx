import React, { Component } from "react";
import "./Popup.css";

//import components
import Pill from "./Pill";

class Contact extends Component {
  render() {
    return (
      <div className="Popup">
        <a href={"#" + this.props.title}>
          <Pill name={this.props.title} />
        </a>
        <span id={this.props.title} className="popup-text">
          {this.props.content}
        </span>
      </div>
    );
  }
}

export default Contact;
