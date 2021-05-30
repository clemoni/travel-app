import { handleGetInfo } from "./getInfoHandler/getInfoHandler";
import { fireClarifyTemplate } from "./render/renderClarify";
import { renderCompRest } from "../getRest/render/renderCompRest";
import { fireDangerSL, clearAlert } from "../Util/alert";
import { getBaseUrl } from "../Util/getBaseUrl";

const axios = require("axios").default;

/**
 * Request to server route "/travel/getcity"
 * @param {object} values
 * @returns {Array} reponse
 */
const fetchCityData = async (values) => {
  const url = getBaseUrl("/travel/getcity");
  const res = await axios.post(url, {
    values,
  });
  return res;
};

export const getCity = (e) => {
  e.preventDefault();

  clearAlert();

  // Test values from from
  // If valid fetchCityData
  // if not reject catch error
  handleGetInfo()
    .then((values) => fetchCityData(values))
    .then((values) => {
      // If response.data from server has key explore
      // if means that redirect to /getrest has been done
      // therfore renderCompRest(values.data) is used to display info
      // Otherwise Clairy City is displayes
      "explore" in values.data
        ? renderCompRest(values.data)
        : fireClarifyTemplate(values);
    })
    .catch((error) => {
      // Thanks David Flanagan . JavaScript: The Definitive Guide, 7th Edition
      // if error does not toJSON function then undefined then get just error
      // Two type of error, error from client in that case
      // error is just array or a string
      // If error from server need to use the error.response
      // Use ?. if method not existing return undefined and
      // use error only
      const message = error.response?.data || error;
      // FireDangerSL can me use either for string or array
      // since message is converted to array
      // see fireDangerSL @../Util/alert
      fireDangerSL(message);
    });
};
