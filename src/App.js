import React, { Component } from "react";
import "./App.css";

//import react router and transition
import { Route, NavLink, BrowserRouter, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

//import components
import Navbar from "./components/Navbar";
import Landscape from "./components/Landscape";

//import pages
import About from "./pages/About";


class App extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "#872a9d",
      tab: 0,
      direction: "left",
    };
  }

  handleClick = (tab) => {
    if (this.state.tab > tab) {
      this.setState({ direction: "right", tab: tab })
    } else {
      this.setState({ direction: "left", tab: tab })
    }
  }

  handleExiting = (e) => {
    if (e != undefined) {
      if (this.state.direction == "left") {
        e.classList.remove("right-exit-active")
        e.classList.remove("right-exit")
        e.classList.add("left-exit-active")
        e.classList.add("left-exit")
      } else {
        e.classList.remove("left-exit-active")
        e.classList.remove("left-exit")
        e.classList.add("right-exit-active")
        e.classList.add("right-exit")
      }
    }
  }


  handleScroll = () => {
    //find y pos
    let page = document.getElementsByClassName("Page")[0]
    if (page != undefined) {
      this.setState({ yPos: page.getBoundingClientRect().top })
    }

    //set background
    if (window.pageYOffset <= 0) this.setState({ backgroundColor: "#AE44BF" });
    if (window.pageYOffset >= document.body.offsetHeight)
      this.setState({ backgroundColor: "#872a9d" });

    let html = document.getElementById("html");
    if (html.style.backgroundColor != this.state.backgroundColor) {
      html.style.backgroundColor = this.state.backgroundColor;
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  classNames={this.state.direction}
                  timeout={{ enter: 250, exit: 250 }}
                  onExiting={this.handleExiting}
                >
                  <Switch location={location}>

                    <Route path={["/", "/about"]} exact render={() => <div className="Page"  ><About /></div>}>

                    </Route>
                    <Route path="/contact" render={() => <div className="Page"> <div id="Contact" className="Content"> Email, UW email, Phone, discord{" "}</div> </div>}>

                    </Route>
                  </Switch></CSSTransition></TransitionGroup>)} />
          <Navbar handleClick={this.handleClick} />
        </BrowserRouter>
        <Landscape tab={this.state.tab} />
      </div>
    );
  }
}

export default App;
