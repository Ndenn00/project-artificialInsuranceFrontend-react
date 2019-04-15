import React from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row center home-row">
          <div className="twelve columns">
            <h1 className="header center orange-text">Welcome Traveller</h1>
          </div>
        </div>
        <div className="row center home-row">
          <div className="twelve columns">
          <h5 className="header col s12 light">
            Why not get some sweet insurance?
          </h5>
          </div>
        </div>
        <div className="row center home-row">
          <div className="twelve columns">
          <NavLink
            to="/quote"
            className="button">
            Start
          </NavLink>
          </div>
        </div>
        
       
       
      </div>
    );
  }
}

export default Home;
