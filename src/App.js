import React, { Component } from "react";
import "./App.css";

import firebase from 'firebase/app';
import 'firebase/analytics';

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

if (!firebase.apps.length) firebase.initializeApp({
  apiKey: "AIzaSyDScSTrNdLC-KuKAQRgfBGkOS4ggGWfAUc",
  authDomain: "personal-website-15cf0.firebaseapp.com",
  databaseURL: "https://personal-website-15cf0.firebaseio.com",
  projectId: "personal-website-15cf0",
  storageBucket: "personal-website-15cf0.appspot.com",
  messagingSenderId: "1003425867373",
  appId: "1:1003425867373:web:000c3fed254549749f0164",
  measurementId: "G-NGC298EM6C"
})


class App extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "#872a9d",
      tab: 0,
      direction: "left",
      frontPageIsVisible: false,
    };
    firebase.analytics()
  }

  componentDidMount = () => {
    switch (window.location.pathname.toLowerCase()){
    case "/resume": 
      this.setState({tab: 1})
      break
    case "/contact": 
      this.setState({tab: 2})
      break
    default: 
      this.setState({tab: 0})
    }

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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
    if (window.pageYOffset <= 0)
      this.setState({ backgroundColor: "#AE44BF" });
    if (window.pageYOffset >= document.body.offsetHeight - window.innerHeight)
      this.setState({ backgroundColor: "#872a9d" });
  
    let html = document.getElementById("html");
    if (html.style.backgroundColor !== this.state.backgroundColor) {
      html.style.backgroundColor = this.state.backgroundColor;
    }
  };

  setFrontPageIsVisible = (isVisible) => {
    this.setState({ frontPageIsVisible: isVisible });
  };

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
