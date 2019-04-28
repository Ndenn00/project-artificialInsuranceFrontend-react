import React from "react";
import { Field } from "formik";

import Banner from "./Banner";
import FormErrors from "./FormErrors";

const VehicleDetails = props => {
  return (
    <div className="container">
      <Banner header="Vehicle Details" blurb="What about your car?" />
      <VehicleDetailsForm {...props} />
    </div>
  );
};

const VehicleDetailsForm = props => {
  return (
    <div>
      <div className="row">
        <div className="six columns">
          <label for="vin">Vin Number</label>
          <Field className="u-full-width" type="text" name="vin" />
          <FormErrors errors={props.errors.vin} touched={props.touched.vin} />
        </div>

        <div className="six columns">
          <label for="reg">Registration No.</label>
          <Field className="u-full-width" type="text" name="reg" />
          <FormErrors errors={props.errors.reg} touched={props.touched.reg} />
        </div>
      </div>

      <div className="row">
        <div className="six columns">
          <label for="make">Make</label>
          <Field className="u-full-width" type="text" name="make" />
          <FormErrors errors={props.errors.make} touched={props.touched.make} />
        </div>

        <div className="six columns">
          <label for="model">Model</label>
          <Field className="u-full-width" type="text" name="model" />
          <FormErrors errors={props.errors.model} touched={props.touched.model} />
        </div>
      </div>

      <div className="row">
        <div className="six columns">
          <label for="year">Year</label>
          <Field className="u-full-width" type="text" name="year" />
          <FormErrors errors={props.errors.year} touched={props.touched.year} />

        </div>

        <div className="six columns">
          <label for="miles">Miles</label>
          <Field className="u-full-width" type="text" name="miles" />
          <FormErrors errors={props.errors.miles} touched={props.touched.miles} />
        </div>
      </div>

      <div className="row">
        <div className="six columns">
          <label for="primaryUse">Primary Use</label>
          <Field component="select" className="u-full-width" name="primaryUse">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Field>
        </div>
        <div className="six columns">
          <label for="lengthOfOwnership">Length of Vehicle Ownership</label>
          <Field
            className="u-full-width"
            type="text"
            name="lengthOfOwnership"
          />
          <FormErrors errors={props.errors.lengthOfOwnership} touched={props.touched.lengthOfOwnership} />

        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default VehicleDetails;
