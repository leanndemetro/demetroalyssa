import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index";
import Contact from "./pages/Contact/index";
import About from "./pages/About/index";
import Portfolio from "./pages/Portfolio/index";
import Navbar from "./components/Navbar/index";





function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Portfolio">
            <Portfolio />
          </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
