import _tool from "fp-dom-tool";

export const getInputValue = (idName) => {
  return _tool._getElementID(idName).value;
};

export const getGetInfoInputsValues = () => {
  const travelDate = getInputValue("travel-date");
  const travelCity = getInputValue("travel-city");
  return { travelCity, travelDate };
};
