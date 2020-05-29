import React, { Component } from "react";
import "./App.css";

//import react router
import { Route, NavLink, HashRouter } from "react-router-dom";

//import components
import Navbar from "./components/Navbar";
import Landscape from "./components/Landscape";

//import pages
import About from "./pages/About";

class App extends Component {
  state = { backgroundColor: "#872a9d" };

  setBG = () => {
    if (window.pageYOffset <= 0) this.setState({ backgroundColor: "#AE44BF" });
    if (window.pageYOffset >= document.body.offsetHeight)
      this.setState({ backgroundColor: "#872a9d" });

    let html = document.getElementById("html");
    if (html.style.backgroundColor != this.state.backgroundColor) {
      html.style.backgroundColor = this.state.backgroundColor;
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.setBG);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.setBG);
  }
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Navbar />
          <div className="Page">
            <Route path={["/", "/About"]} exact>
              <About />
            </Route>
            <Route path="/Contact">
              <div id="Contact" className="Content">
                {" "}
                Email, UW email, Phone, discord{" "}
              </div>
            </Route>
          </div>
        </HashRouter>
        <Landscape />
      </div>
    );
  }
}

export default App;
