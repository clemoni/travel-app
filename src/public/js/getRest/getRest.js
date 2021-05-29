import _tool from "fp-dom-tool";
import axios from "axios";
import { renderCompRest } from "./render/renderCompRest";

const prepToRequest = (city) => {
  const lat = city.getAttribute("lat");
  const lng = city.getAttribute("lng");
  const name = city.getAttribute("name");
  const countryName = city.getAttribute("country-name");
  return { name, countryName, lat, lng };
};

const fetchRest = async (values) => {
  console.log("fire:: getRest");
  const res = await axios.get("http://localhost:8082/travel/getrest/", {
    params: values,
  });
  return res;
};

export const getRest = (e) => {
  const prepedRequest = prepToRequest(e.target);
  e.preventDefault();
  fetchRest(prepedRequest)
    .then((response) => response.data)
    .then((data) => {
      renderCompRest(data);
    })
    .catch((error) => console.log(error));
};
