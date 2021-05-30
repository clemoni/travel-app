import _tool from "fp-dom-tool";

export const getInputValue = (idName) => {
  return _tool._getElementID(idName).value;
};
/**
 * Return the value for input call travel-date, travel-city
 * @returns
 */
export const getGetInfoInputsValues = () => {
  const travelDate = getInputValue("travel-date");
  const travelCity = getInputValue("travel-city");
  return { travelCity, travelDate };
};
