import React, { Component } from "react";
import "./style.css"

class Navbar extends Component {


  render() {
    return (
      <div className="navbar">
        <br></br>
        <hr></hr>
        <p><a className="navNameText" href="/">Alyssa De Metro</a> <span className="linkSpan"><a className="navLinks" href="/About">About</a> <a className="navLinks" href="/Portfolio">Portfolio</a> <a className="navLinks" href="/Contact">Contact</a></span></p>
      
      </div>

    );
  }
}

export default Navbar;