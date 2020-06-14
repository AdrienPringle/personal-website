import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as GithubIcon } from "./github.svg";
import { ReactComponent as LinkedInIcon } from "./linkedin.svg";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div id="Navbar">
        <NavLink
          to="/About"
          exact
          className="NavText"
          onClick={() => this.props.handleClick(0)}
        >
          <div>About</div>
        </NavLink>
        <NavLink
          to="/Resume"
          className="NavText"
          onClick={() => this.props.handleClick(1)}
        >
          <div>Resume</div>
        </NavLink>
        <NavLink
          to="/Contact"
          className="NavText"
          onClick={() => this.props.handleClick(2)}
        >
          <div>Contact</div>
        </NavLink>
        <a
          href="https://github.com/AdrienPringle"
          target="_blank"
          className="imgContainer"
        >
          <GithubIcon fill="#f2d8f1" />
        </a>
        <a
          href="https://www.linkedin.com/in/adrienpringle/"
          target="_blank"
          className="imgContainer"
        >
          <LinkedInIcon fill="#f2d8f1" />
        </a>
      </div>
    );
  }
}

export default Navbar;
