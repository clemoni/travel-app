import { getGetInfoInputsValues } from "./getInputsValues";
import { getInfoSchema } from "./getInfoSchema";
import { compose } from "../../Util/utilities";

export const getErrors = (inputValues) => {
  const output = { errors: [], values: [] };
  return Object.entries(inputValues).reduce((obj, entry) => {
    const [input, newValue] = entry;
    const inputSchema = getInfoSchema[input];
    const newError = Object.values(inputSchema).map((fn) => fn(newValue));
    obj.values = [...obj.values, ...[newValue]];
    obj.errors = [...obj.errors, ...newError];
    return obj;
  }, output);
};

export const filterError = (getErrors) => {
  const { errors: toFilterError, values } = getErrors;
  const errors = toFilterError.filter((error) => error);
  return { errors, values };
};

export const dispatchGetInfo = (getErrors) => {
  const { errors, values } = getErrors;
  return new Promise((resolve, reject) =>
    !errors.length ? resolve(values) : reject(errors)
  );
};

export const handleGetInfo = compose(
  dispatchGetInfo,
  filterError,
  getErrors,
  getGetInfoInputsValues
);
