import * as validator from "./validator";

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
    // isNotDate: function (value) {
    //   return validator.isDateValidator("Date not in the right format")(value);
    // },
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