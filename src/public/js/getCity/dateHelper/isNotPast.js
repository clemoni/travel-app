import { compose } from "../../Util/utilities";

export const convertStringToDate = (stringDate) => {
  return new Date(stringDate);
};

export const isNotPast = (givenDate) => {
  return givenDate > Date.now();
};

// Chaingin
// Check if chosen date is comming after current day
export const dateIsNotPast = compose(isNotPast, convertStringToDate);
