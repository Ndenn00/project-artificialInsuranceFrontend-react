import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import PersonalDetails from './components/PersonalDetails'

import {BrowserRouter, Route, Switch} from 'react-router-dom'; 

class App extends Component {
  render() {
    return (  
      <BrowserRouter> 
      <Navbar/> 
          <Switch>
          <Route path="/" component={Home} exact/>

            <Route path="/quotepersonaldetails" component={PersonalDetails} exact/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
