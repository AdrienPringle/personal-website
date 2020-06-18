import React, { Component } from "react";
import "./Contact.css";

//import components
import Popup from "../components/Popup";
import Pill from "../components/Pill";
import PageShade from "../components/PageShade";

class Contact extends Component {
  render() {
    return (
      <div id="Contact" className="Content">
        <PageShade />
        <h2 id="header"> Contact </h2>
        <div id="contact-info">
          <h4> I'll respond faster if you use: </h4>
          <Popup title="Email" content="email here" />
          <Popup title="Discord" content="discord here" />

          <h4> Alternatively: </h4>
          <Popup title="Mobile" content="mobile here" />
          <Popup title="Facebook" content="facebook here" />
          <Popup title="Linkedin" content="linkedin here" />
        </div>
      </div>
    );
  }
}

export default Contact;
