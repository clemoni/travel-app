import _ from "lodash";

export const isNotEmpty = (content) => {
  return !_.isEmpty(content);
};
