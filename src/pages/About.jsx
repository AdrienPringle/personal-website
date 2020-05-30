import React, { Component } from "react";
import "./About.css";

//import components
import downButton from "./down-button.svg";
import PageShade from "../components/PageShade";

class About extends Component {
  render() {
    return (
      <div id="About" className="Content">
        <PageShade />
        <div id="frontPage">
          <div id="introduction">
            Hi i'm <h1>Adrien Pringle</h1>
          </div>
          <img id="downButton" alt="go down" src={downButton}></img>
        </div>
        <div id="text">
          <h4>//Useful Links</h4>
          Github, Linkedin
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
            me for the term of <b>fall 2020</b>
          </p>
          <h4>//Origin Story</h4>
          <p>
            {" "}
            I used to like playing games. Then I was introduced to scratch in
            grade 5, which allowed me to make any game I wanted. I designed
            games in Scratch religiously for years, which gradually turned into
            seperate interests in math, programming, ui design, and game design
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          view my embarassing grade 5 scratch games
          <h4> Come play games with me</h4>
          Discord, Steam, Epic, Battlenet, Riot
          <p>I'm also a closet weeb. shh...</p>
          MAL
        </div>
      </div>
    );
  }
}

export default About;
