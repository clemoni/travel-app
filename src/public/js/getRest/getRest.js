import _tool from "fp-dom-tool";
import axios from "axios";
import { renderCompRest } from "./render/renderCompRest";
import { fireDangerSL, clearAlert } from "../Util/alert";
import { getBaseUrl } from "../Util/getBaseUrl";

/**
 * Prepare request /getrest
 * retrieve element query
 * @param {element} city
 * @returns {object}
 */
const prepToRequest = (city) => {
  const lat = city.getAttribute("lat");
  const lng = city.getAttribute("lng");
  const name = city.getAttribute("name");
  const countryName = city.getAttribute("country-name");
  return { name, countryName, lat, lng };
};

/**
 * Axios request to Server route /travel/getrest
 * @param {object} values
 * @returns {object} response
 */
const fetchRest = async (values) => {
  console.log("fire:: getRest");
  const url = getBaseUrl("/travel/getrest");
  const res = await axios.get(url, {
    params: values,
  });
  return res;
};

export const getRest = (e) => {
  //Prepare request by gather value in object
  const prepedRequest = prepToRequest(e.target);
  e.preventDefault();

  // clear any alertMessage
  clearAlert();

  // Request to server
  fetchRest(prepedRequest)
    .then((response) => response.data) // return response > filter data
    .then((data) => {
      renderCompRest(data); // render data to DOM with handlebars
    })
    .catch((error) => {
      // Thanks David Flanagan . JavaScript: The Definitive Guide, 7th Edition
      // if error does not toJSON function then undefined then get just error
      // Two type of error, error from client in that case
      // error is just array or a string
      // If error from server need to use the methot toJSON
      // Use ?. if method not existing return undefined and
      // use error only
      const message = error.toJSON?.().message || error;

      // FireDangerSL can me use either for string or array
      // since message is converted to array
      // see fireDangerSL @../Util/alert
      fireDangerSL(message);
    });
};
