import React from "react";
import { Field } from "formik";

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
          {props.shownText}
        </label>
      )}
    </Field>
  );
}

const CoverDetailsForm = props => {
  return (
    <div className="row">
      <div className="six columns">
        <Checkbox name="cover" value="fire" shownText="Fire" />
        <Checkbox name="cover" value="theft" shownText="Theft" />
        <Checkbox name="cover" value="storm" shownText="Storm" />
        <Checkbox name="cover" value="wheels" shownText="Wheel" />
        <Checkbox name="cover" value="windscreen" shownText="Windscreen" />
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
