import _tool from "fp-dom-tool";
import axios from "axios";
import { renderCompRest } from "./render/renderCompRest";
import { fireDangerSL, clearAlert } from "../Util/alert";
import { getBaseUrl } from "../Util/getBaseUrl";

const prepToRequest = (city) => {
  const lat = city.getAttribute("lat");
  const lng = city.getAttribute("lng");
  const name = city.getAttribute("name");
  const countryName = city.getAttribute("country-name");
  return { name, countryName, lat, lng };
};

const fetchRest = async (values) => {
  console.log("fire:: getRest");
  const url = getBaseUrl("/travel/getrest");
  const res = await axios.get(url, {
    params: values,
  });
  return res;
};

export const getRest = (e) => {
  const prepedRequest = prepToRequest(e.target);
  e.preventDefault();

  clearAlert();

  fetchRest(prepedRequest)
    .then((response) => response.data)
    .then((data) => {
      renderCompRest(data);
    })
    .catch((error) => {
      console.log(error);
      // Thanks David Flanagan . JavaScript: The Definitive Guide, 7th Edition
      // if error does not toJSON function then undefined then get just error
      const message = error.toJSON?.().message || error;

      fireDangerSL(message);
    });
};
