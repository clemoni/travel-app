const compose = require("../utilities");

const convertStringToDate = (stringDate) => {
  return new Date(stringDate);
};

const getCurrentDate = () => Date.now();

const diffSeconde = (current) => (later) => {
  return Math.abs(later - current());
};

const diffSecondeFromNow = diffSeconde(getCurrentDate);

const convertToDays = (diffSeconde) => {
  return Math.ceil(diffSeconde / (1000 * 60 * 60 * 24));
};

const diffFromNow = compose(
  convertToDays,
  diffSecondeFromNow,
  convertStringToDate
);

module.exports = diffFromNow;
