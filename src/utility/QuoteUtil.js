var dateUtility = require("./DateUtil");

export const basePrice = () => {
  return 400;
};

export const ageCalculation = (birthDate, basePrice) => {
  var age = dateUtility.differenceInYears(birthDate);

  if (age >= 17 && age <= 25) {
    return Math.round((basePrice *= 0.1));
  }
  if (age >= 26 && age <= 60) {
    return Math.round((basePrice *= 0.05));
  }
  if (age >= 61 && age <= 80) {
    return Math.round((basePrice *= 0.1));
  }

  return 0;
};

export const drivingExperienceCalculation = (
  drivingExperienceInYears,
  basePrice
) => {
  if (drivingExperienceInYears >= 0 && drivingExperienceInYears <= 5) {
    return Math.round((basePrice *= 0.1));
  }

  if (drivingExperienceInYears >= 6 && drivingExperienceInYears <= 30) {
    return Math.round((basePrice *= 0.05));
  }

  if (drivingExperienceInYears >= 31 && drivingExperienceInYears <= 44) {
    return Math.round((basePrice *= 0.01));
  }

  if (drivingExperienceInYears >= 45) {
    return Math.round((basePrice *= 0.05));
  }

  return 0;
};

export const vinCalculation = vinNumber => {
  if (vinNumber.charAt(vinNumber.length - 1).toUpperCase() === "J") {
    return 50;
  }
  return 0;
};

export const accidentWithinSixYears = accidentOccured => {
  if (accidentOccured) {
    return 50;
  }
  return 0;
};
