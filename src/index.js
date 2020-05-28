import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <div>
      Hi i'm <h1>Adrien Pringle</h1>
      <h4> useful links</h4>
      Github, Linkedin
      <p>
        {" "}
        I like making things, so I've worked on many diverse projects in the
        past. I've dabbled with making video games, remote controlled vehicles,
        discord bots, and smart home devices (and intelligent trash cans). I'm,
        currently in a web design phase which is why you made it to this
        website.
      </p>
      <p>
        {" "}
        Aside from electronics, I like running, BMX, math, and power tools. I'll
        be very happy if you put me in front of a milling machine.
      </p>
      <p>
        {" "}
        I'm currently working towards my B.Eng in computer engineering at the
        University of Waterloo. I'm in the coop program so please hire me for
        the term of <b>fall 2020</b>
      </p>
      <h4> origin story</h4>
      <p>
        {" "}
        I used to like playing games. Then I was introduced to scratch in grade
        5, which allowed me to make any game I wanted. I designed games in
        Scratch religiously for years, which gradually turned into seperate
        interests in math, programming, ui design, and game design
      </p>
      view my embarassing grade 5 scratch games
      <h4> Come play games with me</h4>
      Discord, Steam, Epic, Battlenet, Riot
      <p>I'm also a closet weeb. shh...</p>
      MAL
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
