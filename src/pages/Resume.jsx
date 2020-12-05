import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./Resume.css";

//import components
import PageShade from "../components/PageShade";
import ResumeTile from "../components/ResumeTile";
import Switch from "../components/Switch";

import resumeItems from "./resumeItems.json";
import { ReactComponent as PDFIcon } from "./document.svg";

class Resume extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCondensed: true,
		};
	}

	getResumeSkills(isCondensed) {
		let skills = { ...resumeItems.skills }; //copy instead of reference

		//filter skills that aren't important
		if (isCondensed) {
			for (let skill in skills) {
				skills[skill] = skills[skill].filter((i) => i.isImportant);
				if (skills[skill].length === 0) delete skills[skill];
			}
		}

		return (
			<ResumeTile
				title={(isCondensed ? "Condensed " : "") + "Skills Summary"}
				skills={skills}
			/>
		);
	}

	getResumeExperiences(isCondensed) {
		let items = [...resumeItems.experiences]; //copy instead of reference

		//filter experiences that aren't important
		if (isCondensed) {
			items = items.filter((i) => i.isImportant);
		}
		return items.map((i) => (
			<ResumeTile
				key={i.title}
				title={i.title}
				location={i.location}
				dates={i.dates}
				points={i.points}
				skills={i.skills}
			/>
		));
	}

	handleSwitchOnClick = () => {
		this.setState({ isCondensed: !this.state.isCondensed });
	};

	render() {
		return (
			<div id="Resume" className="Content">
				<Helmet>
					<title>Resume - Adrien Pringle</title>
					<link href="https://apringle.dev/Resume" rel="canonical"></link>
				</Helmet>
				<PageShade />
				<div id="resumeHead">
					<div id="resumeTitle">
						<h2 id="resumeName">Adrien Pringle</h2>
						<div id="resumeSub">
							<div>BEng. in Compunter Engineering</div>
							<div id="seperator"> | </div>
							<div>University of Waterloo 2024</div>
						</div>
					</div>
					<div id="resumeOptions">
						<Switch
							text={this.state.isCondensed ? "Show Expanded" : "Show Condensed"}
							handleClick={this.handleSwitchOnClick}
						/>
						<a
							href="/Adrien_Pringle_Resume_2020.pdf"
							target="_blank"
							id="openPDFButton"
						>
							<PDFIcon />
							<span>Open PDF</span>
						</a>
					</div>
				</div>
				{this.getResumeSkills(this.state.isCondensed)}
				<div id="experienceSeperator">
					<h3 id="seperatorText"> Experience </h3>
					<hr id="seperatorEnd"></hr>
				</div>
				<div id="tilesContainer">
					{this.getResumeExperiences(this.state.isCondensed)}
				</div>
			</div>
		);
	}
}

export default Resume;
