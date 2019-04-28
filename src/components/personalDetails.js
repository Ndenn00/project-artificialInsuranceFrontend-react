import React from "react";
import { Field } from "formik";

import Banner from "./Banner";
import FormErrors from "./FormErrors";

const PersonalDetails = props => {
  return (
    <div className="container">
      <Banner
        header="Personal Details"
        blurb="Hello, you. Why not tell us about yourself?"
      />
      <PersonalDetailsForm {...props} />
    </div>
  );
};

const PersonalDetailsForm = props => {

  
  return (
    <div>
      <div className="row">
        <div className="six columns">
          <label for="firstname">First Name</label>

          <Field className="u-full-width" type="text" name="firstname" />
          <FormErrors
            errors={props.errors.firstname}
            touched={props.touched.firstname}
          />
        </div>

        <div className="six columns">
          <label for="lastname">Last Name</label>
          <Field className="u-full-width" type="text" name="lastname" />
          <FormErrors
            errors={props.errors.lastname}
            touched={props.touched.lastname}
          />
        </div>
      </div>

      <div className="row">
        <div className="six columns">
          <label for="address">Address</label>
          <Field className="u-full-width" type="text" name="address" />
          <FormErrors
            errors={props.errors.address}
            touched={props.touched.address}
          />
        </div>

        <div className="six columns">
          <label for="postcode">Postcode</label>
          <Field className="u-full-width" type="text" name="postcode" />
          <FormErrors
            errors={props.errors.postcode}
            touched={props.touched.postcode}
          />
        </div>
      </div>

      <div className="row">
        <div className="six columns">
          <label for="email">Email</label>
          <Field className="u-full-width" type="email" name="email" />
          <FormErrors
            errors={props.errors.email}
            touched={props.touched.email}
          />
        </div>

        <div className="six columns">
          <label for="phone">Phone</label>
          <Field className="u-full-width" type="text" name="phone" />
          <FormErrors
            errors={props.errors.phone}
            touched={props.touched.phone}
          />
        </div>
      </div>

      <div className="row">
        <div className="six columns">
          <label for="dob">Date of Birth</label>
          <Field className="u-full-width" type="date" name="dob" />
          <FormErrors
            errors={props.errors.dob}
            touched={props.touched.dob}
          />
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

export default PersonalDetails;
