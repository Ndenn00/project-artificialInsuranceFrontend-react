import React, { Component } from 'react';
import './App.css';

import PersonalDetails from './components/personalDetails'

import {BrowserRouter, Route, Switch} from 'react-router-dom'; 

class App extends Component {
  render() {
    return (  
      <BrowserRouter>  
          <Switch>
            <Route path="/personaldetails" component={PersonalDetails} exact/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
