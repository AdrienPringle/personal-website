import React from "react";
import "./Contact.css";

//import components
// import Popup from "../components/Popup";
// import Pill from "../components/Pill";
import PageShade from "../components/PageShade";

//import contact info
import info from "./contactInfo.js";

function Contact() {
  const contactGroup = (title, items) => {
    return (
      <React.Fragment key={title}>
        <div className="contact-section-header">{title}</div>
        <div id="contactQuick" className="contact-section">
          <div className="contact-section-content">
            {items.map((i) => contactItem(i))}
          </div>
        </div>
      </React.Fragment>
    );
  };
  const contactItem = ({ value, icon, active, isColored, isLink }) => {
    return (
      <div className="contact-item" key={value}>
        {React.createElement(icon, {
          className: "contact-icon",
          ...(!isColored && { fill: "#f2d8f1" }),
        })}
        <span className="contact-info">{value}</span>
      </div>
    );
  };

  return (
    <div id="Contact" className="Content">
      <PageShade />
      <h2 id="header"> Contact </h2>
      <div id="contact-info">
        {Object.keys(info).map((title) => contactGroup(title, info[title]))}
      </div>
    </div>
  );
}

export default Contact;
