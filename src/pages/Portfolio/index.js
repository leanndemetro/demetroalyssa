import React from "react";
import "./style.css"


function Portfolio() {
  return (
    <div className="portfolio">
      <span className="container">
        <a rel="noreferrer" target="_blank" href="https://assist-application.herokuapp.com/"><img className="certImg" id="assist" alt="assist" src="https://i.imgur.com/GQlOM04.jpg"></img></a>
        <div class="bottom-left"><span className="imgTitle">Assist</span>
          <br></br>
          The Assist application connects users with volunteer and community engagement opportunities. This app uses JavaScript, MongoDB, Express, React, Redux, Node.js, JWT, Mongoose, MDBootstrap, and The Charity Navigator API.
        </div>
      </span>
      <span className="container">
        <a rel="noreferrer" target="_blank" href="https://github.com/AnthonnyMitch/Growth"><img className="certImg" alt="growth" src="https://i.imgur.com/Iumel7X.jpg"></img></a>
        <div class="bottom-left"><span className="imgTitle">Growth</span>
          <br></br>
          With Growth, users are able to search for any plant species and be provided with a full report on growth and care instructions. This app uses Javascript, Node, Express, Handlebars.js, MySQL, Sequelize, Ajax, and MDBootstrap.
        </div>
      </span>
      <span className="container">
        <a rel="noreferrer" target="_blank" href="https://compost-incorp.herokuapp.com/"><img className="certImg" alt="growOrlando" src="https://i.imgur.com/zWEZD0K.jpg"></img></a>
        <div class="bottom-left"><span className="imgTitle">Grow Orlando</span>
          <br></br>
          Grow Orlando is a website built for the Grow Orlando non-profit organization. This application uses React.js, JavaScript, MDBootstrap and more.
        </div>
      </span>
      <span className="container">
        <a rel="noreferrer" target="_blank" href="https://murmuring-meadow-11462.herokuapp.com/"><img className="certImg" alt="budgetTracker" src="https://i.imgur.com/DRdb17c.jpg"></img></a>
        <div class="bottom-left"><span className="imgTitle">Budget Tracker</span>
          <br></br>
          The Budget Tracker is a progressive web application in which a user can add or subtract values from their wallet. This app uses JavaScript, Mongoose, Express.js, Morgan, Jquery, MongoDB Atlas, and local storage.
        </div>
      </span>
      <span className="container">
        <a rel="noreferrer" target="_blank" href="https://leanndemetro.github.io/workDayScheduler/"><img className="certImg" alt="workDayScheduler" src="https://i.imgur.com/DDuedsw.jpg"></img></a>
        <div class="bottom-left"><span className="imgTitle">Work Day Scheduler</span>
          <br></br>
          The work day scheduler allows users to plan our their day hour to hour, and see what times have, or have not passed on a live basis. This app uses Javascript, local storage, Moment.js, Ajax, and Jquery.
        </div>
      </span>
      <span className="container">
        <a rel="noreferrer" target="_blank" href="https://safe-brook-64265.herokuapp.com/"><img className="certImg" alt="noteTaker" src="https://i.imgur.com/rMPJZ5g.jpg"></img></a>
        <div class="bottom-left"><span className="imgTitle">Note Taker</span>
          <br></br>
          The Note Taker application allows users to create their own notes, and save or delete them both on and offline. This app uses Javascript, Express.js, Path, Ajax,  and Jquery.
        </div>
      </span>
    </div>

  );
}


export default Portfolio;