import { isNotEmpty } from "../cityHelper/isNotEmpty";
import { isDate } from "../dateHelper/isDate";
import { dateIsNotPast } from "../dateHelper/isNotPast";

/**
 * Currying a test function of content
 * if failed return message
 * @param {function} function test value
 * @param {string} message to be displayes if fail test
 * @param {*} content to be tested
 * @returns {string} message
 */
export const validatorTest = (test) => (msg) => (content) => {
  const testRes = test(content);
  if (testRes === false) {
    return msg;
  }
};

/**
 * Partial currying of @validatorTest
 * with @isNotEmpty test
 */
export const isNotEmptyValidator = validatorTest(isNotEmpty);

/**
 * Partial currying of @validatorTest
 * with @isDate test
 */
const isDateValidator = validatorTest(isDate);

/**
 * Partial currying of @validatorTest
 * with @dateIsNotPast test
 */
const isNotPastValidator = validatorTest(dateIsNotPast);

/**
 * Since Hierarchy of the test
 * isNotEmpty is tested first
 * if ok other test are to be run
 * @param {function} isNotEmpty
 * @param {function} validatorTest
 * @returns
 */
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
