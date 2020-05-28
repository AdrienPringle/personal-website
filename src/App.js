import React from "react";
import "./App.css";

//import react router
import { Route, NavLink, HashRouter } from "react-router-dom";

//import components
import Navbar from "./components/Navbar";

//import pages
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <div className="Content">
          <Route path={["/", "/About"]} exact>
            <About />
          </Route>
          <Route path="/Contact">
            <div id="Contact"> Email, UW email, Phone, discord </div>
          </Route>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
