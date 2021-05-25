import isEmpty from "lodash/isEmpty";

export const isNotEmpty = (content) => {
  return !isEmpty(content);
};
