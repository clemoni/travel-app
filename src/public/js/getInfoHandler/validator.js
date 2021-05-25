import { isNotEmpty } from "../cityHelper/isNotEmpty";
import { isDate } from "../dateHelper/isDate";
import { dateIsNotPast } from "../dateHelper/isNotPast";

export const validatorTest = (test) => (msg) => (content) => {
  const testRes = test(content);
  if (testRes === false) {
    return msg;
  }
};

export const isNotEmptyValidator = validatorTest(isNotEmpty);

const isDateValidator = validatorTest(isDate);

const isNotPastValidator = validatorTest(dateIsNotPast);

// const isGeoNotEmptyValidator = validatorTest(isNotGeoEmpty);

const ifNotEmptyTestRest =
  (isNotEmpty, validatorTest) => (msg) => (content) => {
    return isNotEmpty(content) ? validatorTest(msg)(content) : null;
  };

export const ifNEmptyTestDateFormat = ifNotEmptyTestRest(
  isNotEmpty,
  isDateValidator
);

export const ifNEmptyTestDateNPast = ifNotEmptyTestRest(
  isNotEmpty,
  isNotPastValidator
);
