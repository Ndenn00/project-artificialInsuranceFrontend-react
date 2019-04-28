import React from "react";
import { Field } from "formik";

import Banner from "./Banner";
import FormErrors from "./FormErrors";

const PreviousInsuranceDetailsForm = props => {
  return (
    <div>
      <div className="row">
        <div className="six columns">
          <label for="licenceNumber">Licence Number</label>
          <Field className="u-full-width" type="text" name="licenceNumber" />
          <FormErrors
            errors={props.errors.licenceNumber}
            touched={props.touched.licenceNumber}
          />
        </div>

        <div className="six columns">
          <label for="yearsHeld">Years Held licence</label>
          <Field className="u-full-width" type="text" name="yearsHeld" />
          <FormErrors
            errors={props.errors.yearsHeld}
            touched={props.touched.yearsHeld}
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label for="noClaims">No Claims Years</label>
          <Field className="u-full-width" type="text" name="noClaims" />
          <FormErrors
            errors={props.errors.noClaims}
            touched={props.touched.noClaims}
          />
        </div>
        <div className="six columns">
          <label for="accidentWithinFiveYears">Accident in last 5 years</label>
          <Field
            className="u-full-width"
            component="select"
            name="accidentWithinFiveYears">
            <option value="True">Yes</option>
            <option value="False">No</option>
            <option value="Prefer Not To Say">Prefer not to say</option>
          </Field>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

const PreviousInsuranceDetails = props => {
  return (
    <div className="container">
      <Banner
        header="Previous Insurance Details"
        blurb="What about the before times?"
      />
      <PreviousInsuranceDetailsForm {...props} />
    </div>
  );
};

export default PreviousInsuranceDetails;
