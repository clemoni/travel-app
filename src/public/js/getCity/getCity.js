import { handleGetInfo } from "./getInfoHandler/getInfoHandler";
import { fireClarifyTemplate } from "./render/renderClarify";
import { renderCompRest } from "../getRest/render/renderCompRest";
import { fireDangerSL, clearAlert } from "../Util/alert";
import { getBaseUrl } from "../Util/getBaseUrl";

const axios = require("axios").default;

const fetchCityData = async (values) => {
  console.log("fire:: getCity");
  const url = getBaseUrl("/travel/getcity");
  const res = await axios.post(url, {
    values,
  });
  return res;
};

export const getCity = (e) => {
  e.preventDefault();
  console.log(getBaseUrl("/getcity"));
  clearAlert();

  handleGetInfo()
    .then((values) => fetchCityData(values))
    .then((values) => {
      "explore" in values.data
        ? renderCompRest(values.data)
        : fireClarifyTemplate(values);
    })
    .catch((error) => {
      console.log(error);
      // Thanks David Flanagan . JavaScript: The Definitive Guide, 7th Edition
      // if error does not toJSON function then undefined then get just error
      const message = error.toJSON?.().message || error;

      fireDangerSL(message);
    });
};
