import React from "react";
import { Form, Field } from "formik";

import Banner from "./Banner";

const VehicleDetailsForm = props => {
  return (
    <Form className="container">
      <div className="row">
        <div className="six columns">
          <label for="vin">Vin Number</label>
          <Field className="u-full-width" type="text" name="vin" />
        </div>

        <div className="six columns">
          <label for="reg">Registration No.</label>
          <Field className="u-full-width" type="text" name="reg" />
        </div>
      </div>

      <div className="row">
        <div className="six columns">
          <label for="make">Make</label>
          <Field className="u-full-width" type="text" name="make" />
        </div>

        <div className="six columns">
          <label for="model">Model</label>
          <Field className="u-full-width" type="text" name="model" />
        </div>
      </div>

      <div className="row">
        <div className="six columns">
          <label for="year">Year</label>
          <Field className="u-full-width" type="text" name="year" />
        </div>

        <div className="six columns">
          <label for="miles">Miles</label>
          <Field className="u-full-width" type="text" name="miles" />
        </div>
      </div>

      <div className="row">
        <div className="six columns">
          <label for="primaryUse">Primary Use</label>
          <Field className="u-full-width" type="checkbox" name="primaryUse"/>
        </div>

        <div className="six columns">
          <label for="phone">Miles</label>
          <Field className="u-full-width" type="text" name="miles" />
        </div>
      </div>
      <br />
      <br />
    </Form>
  );
};

class VehicleDetails extends React.Component {
  render() {
    return (
      <div className="container">
        <Banner header="Vehicle Details" blurb="What about your car?" />
        <VehicleDetailsForm />
      </div>
    );
  }
}

export default VehicleDetails;
