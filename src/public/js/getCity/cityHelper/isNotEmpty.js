import isEmpty from "lodash/isEmpty";

// Check if value is not not empty
export const isNotEmpty = (content) => {
  return !isEmpty(content);
};
