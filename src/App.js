import React, { Component } from "react";
import "./App.css";

//import react router and transition
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//import components
import Navbar from "./components/Navbar";
import Landscape from "./components/Landscape";

//import pages
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import CopyDoc from "./pages/CopyDoc";

class App extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "#872a9d",
      tab: 0,
      direction: "left",
      frontPageIsVisible: false,
    };
  }

  handleClick = (tab) => {
    if (this.state.tab > tab) {
      this.setState({ direction: "right", tab: tab });
    } else {
      this.setState({ direction: "left", tab: tab });
    }
  };

  handleExiting = (e) => {
    if (e) {
      if (this.state.direction === "left") {
        e.classList.remove("right-exit-active");
        e.classList.remove("right-exit");
        e.classList.add("left-exit-active");
        e.classList.add("left-exit");
      } else {
        e.classList.remove("left-exit-active");
        e.classList.remove("left-exit");
        e.classList.add("right-exit-active");
        e.classList.add("right-exit");
      }
    }
  };

  handleEntered = () => {
    window.scrollTo(0, 0);
  };

  handleScroll = () => {
    //find y pos
    let page = document.getElementsByClassName("Page")[0];
    if (page !== undefined) {
      //this.setState({ yPos: page.getBoundingClientRect().top });
    }

    //set background
    if (window.location.pathname !== "/copydoc") {
      if (window.pageYOffset <= 0)
        this.setState({ backgroundColor: "#AE44BF" });
      if (window.pageYOffset >= document.body.offsetHeight)
        this.setState({ backgroundColor: "#872a9d" });
    }
    let html = document.getElementById("html");
    if (html.style.backgroundColor !== this.state.backgroundColor) {
      html.style.backgroundColor = this.state.backgroundColor;
    }
  };

  setFrontPageIsVisible = (isVisible) => {
    this.setState({ frontPageIsVisible: isVisible });
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
                  onEntered={this.handleEntered}
                >
                  <Switch location={location}>
                    <Route
                      path={["/", "/about"]}
                      exact
                      render={() => (
                        <div id="p1" className="Page">
                          <About setVisible={this.setFrontPageIsVisible} />
                        </div>
                      )}
                    />
                    <Route
                      path="/resume"
                      render={() => (
                        <div id="p2" className="Page">
                          <Resume />
                        </div>
                      )}
                    />
                    <Route
                      path="/contact"
                      render={() => (
                        <div id="p3" className="Page">
                          <Contact />
                        </div>
                      )}
                    />
                    <Route
                      path="/copydoc"
                      render={() => (
                        <div id="copy" className="Page">
                          <CopyDoc />
                        </div>
                      )}
                    />
                    <Redirect to="/" />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
          {window.location.pathname === "/copydoc" ? (
            <div id="plain-backdrop" className="backdrop"></div>
          ) : (
            <React.Fragment>
              <Navbar
                handleClick={this.handleClick}
                frontPageIsVisible={this.state.frontPageIsVisible}
              />
              <Landscape tab={this.state.tab} />
              <div id="color-backdrop" className="backdrop"></div>
            </React.Fragment>
          )}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
