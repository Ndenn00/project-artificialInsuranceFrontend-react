import React from "react";
import { Form, Field } from "formik";

import Banner from "./Banner";

const PreviousInsuranceDetailsForm = props => {
  return (
    <div>
      <div className="row">
        <div className="six columns">
          <label for="licenceNumber">licence Number</label>
          <Field className="u-full-width" type="text" name="licenceNumber" />
        </div>

        <div className="six columns">
          <label for="yearsHeld">Years Held licence</label>
          <Field className="u-full-width" type="text" name="yearsHeld" />
        </div>
      </div>

      <div className="row">
        <div className="six columns">
          <label for="noClaims">No Claims Years</label>
          <Field className="u-full-width" type="text" name="noClaims" />
        </div>

        <div className="six columns">
          <label for="accidentWithinFiveYears">Accident in last 5 years</label>
          <Field className="u-full-width" type="text" name="accidentWithinFiveYears" />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

class PreviousInsuranceDetails extends React.Component {
  render() {
    return (
      <div className="container">
        <Banner header="Previous Insurance Details" blurb="And, what about the before times?" />
        <PreviousInsuranceDetailsForm />
      </div>
    );
  }
}

export default PreviousInsuranceDetails;
