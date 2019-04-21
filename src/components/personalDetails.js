import React from "react";
import { Field } from "formik";

import Banner from "./Banner";

const PersonalDetailsForm = props => {
  return (
    <div>
      <div className="row">
        <div className="six columns">
          <label for="firstname">First Name</label>
          {props.errors.firstname &&  props.touched.firstname && <p>Error and touched</p>}
          <Field className="u-full-width" type="text" name="firstname" />
        </div>

        <div className="six columns">
          <label for="lastname">Last Name</label>
          <Field className="u-full-width" type="text" name="lastname" />
        </div>
      </div>

      <div className="row">
        <div className="six columns">
          <label for="address">Address</label>
          <Field className="u-full-width" type="text" name="address" />
        </div>

        <div className="six columns">
          <label for="postcode">Postcode</label>
          <Field className="u-full-width" type="text" name="postcode" />
        </div>
      </div>

      <div className="row">
        <div className="six columns">
          <label for="email">Email</label>
          <Field className="u-full-width" type="email" name="email" />
        </div>

        <div className="six columns">
          <label for="phone">Phone</label>
          <Field className="u-full-width" type="text" name="phone" />
        </div>
      </div>

      <div className="row">
        <div className="six columns">
          <label for="dob">Date of Birth</label>
          <Field className="u-full-width" type="date" name="dob" />
        </div>

        <div className="six columns">
          <label for="phone">Gender</label>
          <Field className="u-full-width" component="select" name="gender">
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Prefer Not To Say">Prefer not to say</option>
          </Field>
        </div>
      </div>
    </div>
  );
};

const PersonalDetails = props => {
  return (
    <div className="container">
      <Banner
        header="Personal Details"
        blurb="Hello, you. Why not tell us about yourself?"
      />
      <PersonalDetailsForm {...props}/>
    </div>
  );
};

export default PersonalDetails;
