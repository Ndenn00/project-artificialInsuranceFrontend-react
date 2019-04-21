import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import MultipartForm from "./components/MultipartForm";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withFormik } from "formik";
import * as Yup from "yup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/quote"
            render={routeProps => (
              <MultipartForm {...routeProps} {...this.props} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2)
    .required("Please enter your first name"),
  lastname: Yup.string()
    .min(2)
    .required("Please enter a last name"),
  address: Yup.string()
    .min(2)
    .required("Please enter an email"),
  postcode: Yup.string()
    .min(2)
    .required("Please enter an email")
});

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
      lengthOfOwnership: lengthOfOwnership || "",
      licenceNumber: licenceNumber || "",
      yearsHeld: yearsHeld || "",
      noClaims: noClaims || "",
      accidentWithinFiveYears: accidentWithinFiveYears || "",
      cover: cover || []
    };
  },
  validationSchema: validationSchema,

  handleSubmit(values) {
    console.log(values);
  }
})(App);

export default FormikApp;
