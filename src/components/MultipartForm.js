import React from "react";
import { Form, Field } from "formik";

import PersonalDetails from "./PersonalDetails";

class MultpartForm extends React.Component {
  constructor(props) {
    super(props);
    // Set the initial input values
    this.state = {
      currentStep: 1 // Default is Step 1
    };

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  _next() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  render() {
    return (
      <div>
        <Step1 currentStep={this.state.currentStep} />
        <Step2 currentStep={this.state.currentStep} />

        <NavButtons
          currentStep={this.state.currentStep}
          _prev={this._prev}
          _next={this._next}
        />
      </div>
    );
  }
}

const NavButtons = ({ currentStep, _prev, _next }) => {
  let isAtMin = currentStep !== 1;

  return (
    <div className="container center">
      <div className="row">
        <div className="twelve columns">
          {isAtMin && <button onClick={_prev}>Previous</button>}
          <button onClick={_next}>Next</button>
        </div>
      </div>
    </div>
  );
};

const Step1 = props => {
  if (props.currentStep != "1") {
    return null;
  }
  return <PersonalDetails />;
};

const Step2 = props => {
  if (props.currentStep != "2") {
    return null;
  }
  return <h1>Yoo boyy</h1>;
};

export default MultpartForm;
