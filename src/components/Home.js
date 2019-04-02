import React from "react"; 
import {NavLink} from 'react-router-dom'


class Home extends React.Component {
  
    render() {
      return (
            <div className="section no-pad-bot">
                <div className="container">
                    <h1 className="header center orange-text">Welcome Traveller</h1>
                </div>
                <div className="row center">
                    <h5 class="header col s12 light">Why not get some sweet insurance?</h5>
                </div>
                <div className="row center">
                    <NavLink to="/quotepersonaldetails" className="btn-large waves-light orange">Start</NavLink>
                </div>
            </div>
            
      );
    }
  }

  export default Home; 