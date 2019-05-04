import * as regex from "./Regex";
import * as Yup from "yup";

const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 17));
const currentYear = new Date().getFullYear();
const minAge = currentYear - 40;

export const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "First name must be at least two characters")
    .required("First name is required"),
  lastname: Yup.string()
    .min(2, "Last name must be at least two characters")
    .required("Last name is required"),
  address: Yup.string()
    .min(2, "Address not valid")
    .required("Address is required"),
  postcode: Yup.string()
    .matches(regex.ukPostcodeRegexp, "Postcode not valid")
    .required("Postcode not valid"),
  email: Yup.string()
    .email("Not a valid email")
    .required("Valid email is required"),
  phone: Yup.string()
    .matches(regex.ukPhoneRegexp, "Phone number is not valid")
    .required("Phone is required"),
  dob: Yup.date()
    .max(maxDate, "You have to be at least 17 Years old")
    .required("Date of birth is required"),
  vin: Yup.string()
    .matches(regex.vinRegexp, "Vin not valid")
    .required("Vin is required"),
  reg: Yup.string()
    .matches(regex.registartionRegexp, "Registartion No. not valid")
    .required("Registartion number required"),
  make: Yup.string()
    .min(3, "Not a valid make")
    .required("Make is required"),
  model: Yup.string()
    .min(3, "Not a valid model")
    .required("Model is required"),
  year: Yup.number()
    .typeError("Has to be a number, obvs")
    .min(minAge, "Not a valid year, too old")
    .max(currentYear, "Not a valid year, that's in the future..")
    .required("Year is required"),
  miles: Yup.number()
    .typeError("Has to be a number, obvs")
    .max(500000, "Not a valid milage")
    .required("Mileage is required"),
  lengthOfOwnership: Yup.number()
    .typeError("Has to be a number, obvs")
    .min(0, "Not a valid length of ownership")
    .max(50, "Not a valid length of ownership")
    .required("Length of ownership is required"),
  licenceNumber: Yup.string()
    .matches(regex.ukLicenceRegexp, "Licence not valid")
    .required("Licence Number required"),
  yearsHeld: Yup.number()
    .typeError("Has to be a number, obvs")
    .min(0, "Not a valid length")
    .max(80, "Not a valid length")
    .required("Licence years held is required"),
  noClaims: Yup.number()
    .typeError("Has to be a number, obvs")
    .min(0, "Not a valid length")
    .max(80, "Not a valid length")
    .required("No Claims years held is required"),
  gender: Yup.string().required("Selection required").matches(regex.selectRegexp, "Selection required"),
  primaryUse: Yup.string().required("Selection required").matches(regex.selectRegexp, "Selection required"),
  accidentWithinFiveYears: Yup.string().required("Selection required").matches(regex.selectRegexp, "Selection required"),

});
