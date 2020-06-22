import React, { Component } from "react";
import "./Contact.css";

//import components
import Popup from "../components/Popup";
import Pill from "../components/Pill";
import PageShade from "../components/PageShade";

//import contact icons
import { ReactComponent as Canada } from "./contact-icons/canada.svg";
import { ReactComponent as Discord } from "./contact-icons/discord.svg";
import { ReactComponent as Email } from "./contact-icons/email.svg";
import { ReactComponent as Facebook } from "./contact-icons/facebook.svg";
import { ReactComponent as GitHub } from "./contact-icons/github.svg";
import { ReactComponent as HK } from "./contact-icons/hk.svg";
import { ReactComponent as LinkedIn } from "./contact-icons/linkedin.svg";

class Contact extends Component {
  render() {
    return (
      <div id="Contact" className="Content">
        <PageShade />
        <h2 id="header"> Contact </h2>
        <div id="contact-info">
          <div className="contact-section-header">Quick Contact</div>
          <div id="contactQuick" className="contact-section">
            <div className="contact-section-content">
              <div className="contact-item">
                <Email className="contact-icon" fill="#f2d8f1" />
                <span className="contact-info">adrienpringle@gmail.com</span>
              </div>
              <div className="contact-item">
                <Discord className="contact-icon" fill="#f2d8f1" />
                <span className="contact-info">chip2222#1364</span>
              </div>
            </div>
          </div>

          <div className="contact-section-header">Mobile</div>
          <div id="contactMobile" className="contact-section">
            <div className="contact-item">
              <HK className="contact-icon" />
              <span className="contact-info">+852 xxxx xxxx </span>
            </div>
            <div className="contact-item">
              <Canada className="contact-icon" />
              <span className="contact-info">+1 xxx xxx xxxx</span>
            </div>
          </div>

          <div className="contact-section-header">Other</div>
          <div id="contactOther" className="contact-section">
            <div className="contact-item">
              <Facebook className="contact-icon" fill="#f2d8f1" />
              <span className="contact-info">
                facebook.com/AdrienPringleFB{" "}
              </span>
            </div>
            <div className="contact-item">
              <LinkedIn className="contact-icon" fill="#f2d8f1" />
              <span className="contact-info">linkedin.com/AdrienPringle</span>
            </div>
            <div className="contact-item">
              <GitHub className="contact-icon" fill="#f2d8f1" />
              <span className="contact-info">github.com/AdrienPringle </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
