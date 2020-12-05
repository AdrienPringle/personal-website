import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/analytics";

import { ReactComponent as GithubIcon } from "./github.svg";
import { ReactComponent as LinkedInIcon } from "./linkedin.svg";
import { ReactComponent as UpButton } from "../pages/down-button.svg";

import "./Navbar.css";

class Navbar extends Component {
	anal = firebase.analytics();

	nameVisibleClass = () =>
		this.props.frontPageIsVisible ? "name-invisible" : "name-visible";

	render() {
		return (
			<div id="Navbar">
				<NavLink
					id="brand"
					to="/"
					onClick={() => {
						this.anal.logEvent("page_view", { page_title: "Home" });
						this.props.handleClick(0);
					}}
					className={this.nameVisibleClass()}
				>
					<span>
						Hi I'm
						<b className="navbar-name"> Adrien Pringle </b>{" "}
					</span>
					{/* <UpButton className="UpButton" /> */}
				</NavLink>
				<div id="tabs">
					<NavLink
						to="/"
						exact
						className="NavText"
						onClick={() => {
							this.anal.logEvent("page_view", { page_title: "About" });
							this.props.handleClick(0);
						}}
					>
						<div>About</div>
					</NavLink>
					<NavLink
						to="/Resume"
						className="NavText"
						onClick={() => {
							this.anal.logEvent("page_view", { page_title: "Resume" });
							this.props.handleClick(1);
						}}
					>
						<div>Resume</div>
					</NavLink>
					<NavLink
						to="/Contact"
						className="NavText"
						onClick={() => {
							this.anal.logEvent("page_view", { page_title: "Contact" });
							this.props.handleClick(2);
						}}
					>
						<div>Contact</div>
					</NavLink>
					<a
						href="https://github.com/AdrienPringle/personal-website"
						rel="noopener"
						className="imgContainer"
					>
						<GithubIcon fill="#f2d8f1" />
					</a>
					<a
						href="https://www.linkedin.com/in/adrienpringle/"
						rel="noopener"
						className="imgContainer"
					>
						<LinkedInIcon fill="#f2d8f1" />
					</a>
				</div>
			</div>
		);
	}
}

export default Navbar;
