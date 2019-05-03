import React from "react";
import { Form } from "formik";

import PersonalDetails from "./PersonalDetails";
import VehicleDetails from "./VehicleDetails";
import PreviousInsuranceDetails from "./PreviousInsuranceDetails";
import CoverDetails from "./CoverDetails";

import { withFormik } from "formik";
import {validationSchema} from '../utility/ValidationSchema'




class MultipartForm extends React.Component {
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


const MultipartFormik = withFormik({
  mapPropsToValues({
    firstname,
    lastname,
    address,
    postcode,
    email,
    phone,
    dob,
    gender,
    vin,
    reg,
    make,
    model,
    year,
    miles,
    ownOrLease,
    primaryUse,
    lengthOfOwnership,
    licenceNumber,
    yearsHeld,
    noClaims,
    accidentWithinFiveYears,
    cover
  }) {
    return {
      firstname: firstname || "",
      lastname: lastname || "",
      address: address || "",
      postcode: postcode || "",
      email: email || "",
      phone: phone || "",
      dob: dob || "",
      gender: gender || "",
      vin: vin || "",
      reg: reg || "",
      make: make || "",
      model: model || "",
      year: year || "",
      miles: miles || "",
      ownOrLease: ownOrLease || "",
      primaryUse: primaryUse || "",
      lengthOfOwnership: lengthOfOwnership || "",
      licenceNumber: licenceNumber || "",
      yearsHeld: yearsHeld || "",
      noClaims: noClaims || "",
      accidentWithinFiveYears: accidentWithinFiveYears || "",
      cover: cover || []
    };
  },
  validationSchema: validationSchema,

  handleSubmit(values, {props}) {
    // const { history } = this.props;
    console.log(values);
    props.updateCurrentQuote(values);
    props.history.push('/review'); 

    return;
  }
})(MultipartForm);

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
          <input type="submit"  />
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

export default MultipartFormik;
