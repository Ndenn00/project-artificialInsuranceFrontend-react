import React from "react";

const FormErrors = props => {
  return (
    <div className="error-text">
      {props.errors && props.touched && (
        <p>{props.errors}</p>
      )}
    </div>
  );
};

export default FormErrors;
