import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MultipartFormik from "./components/MultipartForm";
import Review from "./components/Review";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quoteValues: {} };
  }

  updateQuoteValues = values => {
    this.setState({ quoteValues: values });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/quote"
            render={routeProps => (
              <MultipartFormik {...routeProps} {...this.props} updateQuoteValues={this.updateQuoteValues} />
            )}
          />
          <Route
            path="/review"
            render={routeProps => <Review {...routeProps} {...this.props} quoteValues={this.state.quoteValues} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
