import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

class Navbar extends Component {

  render() {
    return (
      <div id="Navbar">
        <NavLink to="/About" exact className="NavLink" onClick={() => this.props.handleClick(0)}>
          About
        </NavLink>
        <NavLink to="/Resume" className="NavLink" onClick={() => this.props.handleClick(1)}>
          Resume
        </NavLink>
        <NavLink to="/Contact" className="NavLink" onClick={() => this.props.handleClick(2)}>
          Contact
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
