import React from "react";
import { Form } from "formik";

import PersonalDetails from "./PersonalDetails";
import VehicleDetails from "./VehicleDetails";
import PreviousInsuranceDetails from "./PreviousInsuranceDetails";
import CoverDetails from "./CoverDetails";

class MultpartForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentStep: 1 
    };

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  _next(e) {
    e.preventDefault();
    let currentStep = this.state.currentStep;

    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev(e) {
    e.preventDefault();
    let currentStep = this.state.currentStep;

    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  render() {
    return (
      <Form className="container">
        <Step1 currentStep={this.state.currentStep} {...this.props}  />
        <Step2 currentStep={this.state.currentStep} {...this.props}  />
        <Step3 currentStep={this.state.currentStep} {...this.props}  />
        <Step4 currentStep={this.state.currentStep} />

        {this.state.currentStep < 4 ? (
          <NavButtons
            currentStep={this.state.currentStep}
            _prev={this._prev}
            _next={this._next}
          />
        ) : (
          <SubmitButton _prev={this._prev} />
        )}
      </Form>
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

const SubmitButton = ({ _prev }) => {
  return (
    <div className="container center">
      <div className="row">
        <div className="twelve columns">
          <button onClick={_prev}>Previous</button>
          <input type="submit" />
        </div>
      </div>
    </div>
  );
};

const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }
  return <PersonalDetails {...props} />;
};

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }
  return <VehicleDetails {...props}/>;
};

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }
  return <PreviousInsuranceDetails {...props} />;
};

const Step4 = props => {
  if (props.currentStep !== 4) {
    return null;
  }
  return <CoverDetails />;
};

export default MultpartForm;
