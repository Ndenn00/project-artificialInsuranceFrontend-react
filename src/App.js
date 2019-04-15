import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import MultipartForm from './components/MultipartForm'

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withFormik } from "formik";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/quote"
            component={MultipartForm}
            exact
          />
         
        </Switch>
      </BrowserRouter>
    );
  }
}

const FormikApp = withFormik({
  mapPropsToValues({ firstname, lastname, address, postcode, email, phone, dob, gender}) {
    return {
      firstname: firstname || "",
      lastname: lastname || "",
      address: address || "",
      postcode: postcode || "",
      email: email || "",
      phone: phone || "",
      dob: dob || "",
      gender: gender ||""

    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(App);

export default FormikApp;
