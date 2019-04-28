import * as regex from "./Regex";
import * as Yup from "yup";

const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 17));
const currentYear = new Date().getFullYear();
const minAge = currentYear-40;  
console.log(minAge)

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
    email: Yup.string().email("Not a valid email").required('Valid email is required') ,
    phone: Yup.string()
      .matches(regex.ukPhoneRegexp, "Phone number is not valid")
      .required("Phone is required"),
    dob: Yup.date().max(maxDate, "You have to be at least 17 Years old").required("Date of birth is required") ,
    vin: Yup.string().matches(regex.vinRegexp, "Vin not valid").required('Vin is required'),
    reg: Yup.string().matches(regex.registartionRegexp, "Registartion No. not valid").required("Registartion number required"),
    make: Yup.string().min(3, "Not a valid make").required("Make is required"),
    model: Yup.string().min(3, "Not a valid model").required("Model is required"),
    year: Yup.number().min(minAge, "Not a valid year, too old").max(currentYear, "Not a valid year, that's in the future..").required("Year is required"),
    miles: Yup.number().max(500000, "Not a valid milage").required("Mileage is required"),
    lengthOfOwnership: Yup.number().min(0, "Not a valid length of ownership").max(50, "Not a valid length of ownership").required("Length of ownership is required"),


  });