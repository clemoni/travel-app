import _tool from "fp-dom-tool";
import _alert from "fp-dom-alert";
import "fp-dom-alert/lib/index.css";
import { compose } from "../Util/utilities";

const messageContainer = _tool._getElementClass("_message");
const appendContainer = _tool._appendElement(messageContainer);
const _switchAlertDisplay = _tool._switchElementDisplay(messageContainer);

const fireList = (fire) => (errors) => {
  console.log(errors);
  errors.forEach((err) => {
    fire(err);
  });
  _switchAlertDisplay();
};

const convertToList = (string) => {
  return typeof string === "string" ? [string] : string;
};
/**
 * Create alert danger with message as param
 * Get the _message div from the DOM
 * append alert to dom
 * display alert
 * @param {string} message
 */
export const fireDanger = (message) => {
  appendContainer(_alert._alertDanger(message));
};

const fireListDanger = fireList(fireDanger);

export const fireDangerSL = compose(fireListDanger, convertToList);

/**
 * Create alert success with message as param
 * Get the _message div from the DOM
 * append alert to dom
 * display alert
 * @param {string} message
 */
const fireSuccess = (message) => {
  appendContainer(_alert._alertSuccess(message));
};

const fireListSuccess = fireList(fireSuccess);

export const fireSuccessSL = compose(fireListSuccess, convertToList);

/**
 * Remove any alert from _message div of the DOM
 * Diplay none
 */
export const clearAlert = () => {
  messageContainer.innerHTML = "";
  messageContainer.style.display = "none";
};
