import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="container navbar">
      <div className="row">
        <div className="six columns">
          <h1>Artificial Insurance</h1>
        </div>

        <div id="nav" className="six columns">
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/quote">Quote</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
