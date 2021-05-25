import { isNotEmpty } from "../cityHelper/isNotEmpty";
import { isDate } from "../dateHelper/isDate";

export const validatorTest = (test) => (msg) => (content) => {
  const testRes = test(content);
  if (testRes === false) {
    return msg;
  }
};

export const isNotEmptyValidator = validatorTest(isNotEmpty);
export const isDateValidator = validatorTest(isDate);
