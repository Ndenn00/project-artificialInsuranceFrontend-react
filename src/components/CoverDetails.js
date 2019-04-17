import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import PropTypes from "prop-types";

import Banner from "./Banner";

function Checkbox(props) {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <label>
          <input
            type="checkbox"
            {...props}
            checked={field.value.includes(props.value)}
            onChange={() => {
              if (field.value.includes(props.value)) {
                const nextValue = field.value.filter(
                  value => value !== props.value
                );
                form.setFieldValue(props.name, nextValue);
              } else {
                const nextValue = field.value.concat(props.value);
                form.setFieldValue(props.name, nextValue);
              }
            }}
          />
          {props.value}
        </label>
      )}
    </Field>
  );
}

const CoverDetailsForm = props => {
  return (
    
      <div className="row">
        <div className="six columns">
          
          <Checkbox name="cover" value="admin" />
          <Checkbox name="cover" value="customer" />
       
        </div>
      </div>

  );
};

class CoverDetails extends React.Component {
  render() {
    return (
      <div className="container">
        <Banner
          header="Cover Details"
          blurb="What do you want protected against?"
        />
        <CoverDetailsForm />
      </div>
    );
  }
}

export default CoverDetails;
