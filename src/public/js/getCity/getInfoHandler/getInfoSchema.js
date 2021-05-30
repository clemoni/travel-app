import * as validator from "./validator";

/**
 * Schema of the form with valid value and associated test
 */
export const getInfoSchema = {
  travelCity: {
    isNotEmpty: function (value) {
      return validator.isNotEmptyValidator("Please provide a City")(value);
    },
  },
  travelDate: {
    isNotEmpty: function (value) {
      return validator.isNotEmptyValidator("Please provide a Date")(value);
    },
    isNotDate: function (value) {
      return validator.ifNEmptyTestDateFormat("Date not in the right format")(
        value
      );
    },
    isNotPast: function (value) {
      return validator.ifNEmptyTestDateNPast(
        "Sorry, you can't travel to the past, not yet..."
      )(value);
    },
  },
};
