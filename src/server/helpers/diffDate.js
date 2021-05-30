const compose = require("../utilities");
const { SafeTravelDate } = require("../travelRequest");

/**
 * Get travel date from SafeTravelDate
 * @returns {string}
 */
const getDate = () => {
  return SafeTravelDate.getDate;
};

/**
 * Convert a string date to Date object
 * @param {string} stringDate
 * @returns {Date}
 */
const convertStringToDate = (stringDate) => {
  return new Date(stringDate);
};

/**
 * Get current date
 * @returns {Number} the current time
 */
const getCurrentDate = () => Date.now();

/**
 * Difference between travel-date to now
 * @param {function} current
 * @param {date} later
 * @returns {number} the difference between two dates
 */
const diffSeconde = (current) => (later) => {
  return Math.abs(later - current());
};

/**
 * Partial currying diffSeconde
 * @param {function} @getCurrentDate
 */
const diffSecondeFromNow = diffSeconde(getCurrentDate);

/**
 * Convert the diffent in millseconds
 * between two dates in days
 * @param {numbers} diffSeconde
 * @returns {numbers} numbers of days
 */
const convertToDays = (diffSeconde) => {
  return Math.ceil(diffSeconde / (1000 * 60 * 60 * 24));
};

/**
 * Partial Currying of different functions
 * in order to retrieve the travel-Date with store with SafeTravelDate
 * and calculate the difference of days
 * with current time
 */
const diffFromNow = compose(
  convertToDays,
  diffSecondeFromNow,
  convertStringToDate,
  getDate
);

exports.diffFromNow = diffFromNow;
