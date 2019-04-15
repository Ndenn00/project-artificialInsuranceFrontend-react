import React from "react";
import { Form, Field } from "formik";

const IntroBanner = () => {
  return (
    <div className="row center home-row">
      <h2 className="header center orange-text">Personal Details</h2>
      <h5 class="header col s12 light home-row">
        Hello, you. Why not tell us about yourself?
      </h5>
    </div>
  );
};

const PersonalDetailsForm = props => {
  return (
    <Form className="container">
      <div className="row">
        <div className="six columns">
          <label for="firstname">First Name</label>
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
      <br />
      <br />
    </Form>
  );
};

class PersonalDetails extends React.Component {

  render() {
    return (
      <div className="section no-pad-bot">
        <IntroBanner />
        <PersonalDetailsForm />
      </div>
    );
  }
}

export default PersonalDetails;
