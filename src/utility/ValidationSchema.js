import * as regex from "./Regex";
import * as Yup from "yup";

const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 17));

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
    email: Yup.string().email("Not a valid email"),
    phone: Yup.string()
      .matches(regex.ukPhoneRegExp, "Phone number is not valid")
      .required("Phone is required"),
    dob: Yup.date().max(maxDate, "You have to be at least 17 Years old")
  });