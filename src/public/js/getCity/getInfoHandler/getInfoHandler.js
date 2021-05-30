import { getGetInfoInputsValues } from "./getInputsValues";
import { getInfoSchema } from "./getInfoSchema";
import { compose } from "../../Util/utilities";

/**
 * Return list of values and/or erros
 * for the form input
 * @param {*} inputValues
 * @returns {object}
 */
export const getErrors = (inputValues) => {
  const output = { errors: [], values: [] };

  // for each input
  return Object.entries(inputValues).reduce((obj, entry) => {
    const [input, newValue] = entry; // get the input name (travel-date, travel-city) and value
    const inputSchema = getInfoSchema[input]; //retrieve test attach to input
    const newError = Object.values(inputSchema).map((fn) => fn(newValue)); // list of test
    obj.values = [...obj.values, ...[newValue]]; //if values add list values
    obj.errors = [...obj.errors, ...newError]; //if error add list errors
    return obj;
  }, output);
};

/**
 * Remove all the null test
 * @param {object} getErrors
 * @returns {object}
 */
export const filterError = (getErrors) => {
  const { errors: toFilterError, values } = getErrors;
  const errors = toFilterError.filter((error) => error);
  return { errors, values };
};

/**
 * Dispatch getErrors
 * if Errors, reject and send list errors
 * else resolve send list values
 * @param {object} getErrors
 * @returns {function} resolve(values) or reject(errors)
 */
export const dispatchGetInfo = (getErrors) => {
  const { errors, values } = getErrors;
  return new Promise((resolve, reject) =>
    !errors.length ? resolve(values) : reject(errors)
  );
};

// Chaining
// handleGetInfo(values) as starting point
// see @dispatchGetInfo
// see @filterError
// see @getErrors
// see @getGetInfoInputsValues
export const handleGetInfo = compose(
  dispatchGetInfo,
  filterError,
  getErrors,
  getGetInfoInputsValues
);
