import React, { Component } from "react";
import "./About.css";

//import components
import downButton from "./down-button.svg";
import PageShade from "../components/PageShade";

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

  render() {
    return (
      <div id="About" className="Content">
        <PageShade isScroll={true} />
        <div id="frontPage">
          <div id="introduction">
            Hi i'm <h1>Adrien Pringle</h1>
          </div>
          <img id="downButton" alt="go down" src={downButton}></img>
        </div>
        <div id="text">
          <p>
            {" "}
            <b>
              All of this is tentative pls dont hate me too hard yet thank u
              very much xoxo
            </b>
          </p>
          <h4>//About Me</h4>
          <p>
            {" "}
            I like making things, so I've worked on many diverse projects in the
            past. I've dabbled with making video games, remote controlled
            vehicles, discord bots, and smart home devices (and intelligent
            trash cans). I'm, currently in a web design phase which is why you
            made it to this website.
          </p>
          <p>
            {" "}
            Aside from electronics, I like running, BMX, math, and power tools.
            I'll be very happy if you put me in front of a milling machine.
          </p>
          <p>
            {" "}
            I'm currently working towards my B.Eng in computer engineering at
            the University of Waterloo. I'm in the coop program so please hire
            me for the <b>spring 2021</b> academic term
          </p>
          <img src={img1}></img>
          <h4>//Origin Story</h4>
          <p>
            {" "}
            I used to like playing games. Then I was introduced to scratch in
            grade 5, which allowed me to make any game I wanted. I designed
            games in Scratch religiously for years, which gradually turned into
            seperate interests in math, programming, ui design, and game design
          </p>
          <a href="http://"> view my embarassing grade 5 scratch games </a>
          <h4> Come play games with me</h4>
          <a href="http://">Discord</a> <a href="http://">Steam</a>{" "}
          <a href="http://">Epic</a> <a href="http://">Battlenet</a>{" "}
          <a href="http://">Riot</a>
          <div style={{ height: "100rem" }}></div>
          <p>I'm also a closet weeb. shh...</p>
          <a href="http://">MAL</a>
        </div>
      </div>
    );
  }
}

export default About;
