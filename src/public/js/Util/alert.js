import _tool from "fp-dom-tool";
import _alert from "fp-dom-alert";
import "fp-dom-alert/lib/index.css";
import { compose } from "../Util/utilities";

const messageContainer = _tool._getElementClass("_message");
const appendContainer = _tool._appendElement(messageContainer);
const _switchAlertDisplay = _tool._switchElementDisplay(messageContainer);

/**
 * Build Alert to list of Errors
 * Display element DOM _message
 * @param {function} fireDanger or FireSuccess
 * @param {Array} list of erros
 * @returns
 */
const fireList = (fire) => (errors) => {
  errors.forEach((err) => {
    fire(err);
  });
  _switchAlertDisplay();
};

/**
 * If error string convert to array
 * If array already return value
 * @param {string} string
 * @returns {array}
 */
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

/**
 * Partial Currying of FireList
 * Specifif to AlertDanger
 * see @fireList
 */
const fireListDanger = fireList(fireDanger);

/**
 * Chaining
 * Given error array or string
 * convert to array
 * Build alertDanger for each message error
 * see @convertToList
 * see @fireListDanger
 */
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

/**
 * Chaining
 * Given error array or string
 * convert to array
 * Build alertSuccess for each message error
 * see @convertToList
 * see @fireListSuccess
 */
export const fireSuccessSL = compose(fireListSuccess, convertToList);

/**
 * Remove any alert from _message div of the DOM
 * Diplay none
 */
export const clearAlert = () => {
  messageContainer.innerHTML = "";
  messageContainer.style.display = "none";
};
