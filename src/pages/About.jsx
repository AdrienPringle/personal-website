import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./About.css";

import projects from "./projects.js";

//import components
import downButton from "./down-button.svg";
import PageShade from "../components/PageShade";
import ImageTile from "../components/ImageTile";

//import images
import img1 from "./me.png";

class About extends Component {
	componentDidMount() {
		this.props.setVisible(true);
		window.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
		this.props.setVisible(false);
		window.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll = () => {
		let rect = document.getElementById("frontPage").getBoundingClientRect();
		this.props.setVisible(rect.top >= -195);
	};

	handleFrontPageClick() {
		document.getElementById("text").scrollIntoView({
			behavior: "smooth",
		});
	}

	render() {
		return (
			<div id="About" className="Content">
				<Helmet>
					<meta
						name="description"
						content="Hi I'm Adrien Pringle: University of Waterloo computer engineering student, aspiring software developer, and cargo short connoisseur."
					/>
					<title>Adrien Pringle</title>
					<link href="https://apringle.dev" rel="canonical"></link>
				</Helmet>
				<PageShade isScroll={true} />
				<div id="frontPage" onClick={this.handleFrontPageClick}>
					<div id="introduction">
						Hi I'm
						<h1>Adrien Pringle</h1>
						<div className="sub-development">
							and I'm still working hard on this site, so please{" "}
							<a href="https://github.com/AdrienPringle/personal-website/issues">
								create an issue
							</a>{" "}
							when something inevitably breaks
						</div>
					</div>
					<img id="downButton" alt="go down" src={downButton}></img>
				</div>
				<div id="text">
					<h4>About Me</h4>
					<p>
						{" "}
						I like making things, so I've worked on many diverse projects in the
						past. I've dabbled with making video games, remote controlled
						vehicles, discord bots, and smart home devices (and intelligent
						trash cans). I'm, currently in a web design phase which is why you
						made it to this website.
					</p>
					<img id="me-image" src={img1} alt="ugly ass" />
					<p>
						{" "}
						I'm currently working towards my BASc in computer engineering at the
						University of Waterloo. I'm in the coop program so please hire me
						for the <b>spring 2021</b> academic term.
					</p>
					{/* <div id="projects-grid">
            {projects.map(({ title, content, url, src }, i) => (
              <ImageTile
                title={title}
                imgSrc={src}
                key={i}
                style={{ gridColumn: i % 2 }}
              >
                {content}
              </ImageTile>
            ))}
          </div> */}
					<br />
					<h2>Side Projects</h2> <br />
					{projects.map(({ title, content, url, src }, i) => (
						<ImageTile title={title} imgSrc={src} key={i} url={url}>
							{content}
						</ImageTile>
					))}
					<div style={{ height: "25vh" }}></div>
				</div>
			</div>
		);
	}
}

export default About;
