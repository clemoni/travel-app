import _tool from "fp-dom-tool";
import _alert from "fp-dom-alert";
import "fp-dom-alert/lib/index.css";

const messageContainer = _tool._getElementClass("_message");
const appendContainer = _tool._appendElement(messageContainer);
const _switchAlertDisplay = _tool._switchElementDisplay(messageContainer);

/**
 * Create alert danger with message as param
 * Get the _message div from the DOM
 * append alert to dom
 * display alert
 * @param {string} message
 */
const fireAlert = (message) => {
  appendContainer(_alert._alertDanger(message));
};

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

/**
 * Remove any alert from _message div of the DOM
 * Diplay none
 */
const clearAlert = () => {
  messageContainer.innerHTML = "";
  messageContainer.style.display = "none";
};

export { fireAlert, fireSuccess, clearAlert, _switchAlertDisplay };
