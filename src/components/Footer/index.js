import React, { Component } from "react";
import "./style.css"
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <hr></hr>
            <a className="socialIcons" href="https://www.linkedin.com/in/alyssa-de-metro-59abba1b0/"><FaLinkedin /></a>
          
            <a className="socialIcons" href="https://github.com/leanndemetro"><FaGithub /></a>
           
            <br></br>
          </div>
        );
    }
}

export default Footer;