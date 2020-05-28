import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div id="Navbar">
        <NavLink to="/" exact className="NavLink">
          About
        </NavLink>
        <NavLink to="/Resume" className="NavLink">
          Resume
        </NavLink>
        <NavLink to="/Contact" className="NavLink">
          Contact
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
