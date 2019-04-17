import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import MultipartForm from "./components/MultipartForm";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withFormik } from "formik";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/quote" component={MultipartForm} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

const FormikApp = withFormik({
  mapPropsToValues({
    firstname,
    lastname,
    address,
    postcode,
    email,
    phone,
    dob,
    gender,
    vin,
    reg,
    make,
    model,
    year,
    miles,
    ownOrLease,
    primaryUse,
    lengthOfOwnership,
    licenceNumber, 
    yearsHeld,
    noClaims, 
    accidentWithinFiveYears,
    cover

  }) {
    return {
      firstname: firstname || "",
      lastname: lastname || "",
      address: address || "",
      postcode: postcode || "",
      email: email || "",
      phone: phone || "",
      dob: dob || "",
      gender: gender || "",
      vin: vin || "",
      reg: reg || "",
      make: make || "",
      model: model || "",
      year: year || "",
      miles: miles || "",
      ownOrLease: ownOrLease || "",
      primaryUse: primaryUse || "",
      lengthOfOwnership: lengthOfOwnership ||"",
      licenceNumber: licenceNumber || "",
      yearsHeld: yearsHeld || "",
      noClaims: noClaims || "", 
      accidentWithinFiveYears: accidentWithinFiveYears || "",
      cover : cover || []
    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(App);

export default FormikApp;
