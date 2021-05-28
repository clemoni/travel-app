import _tool from "fp-dom-tool";
import axios from "axios";
import { fireEploreTemplate } from "./render/renderExplore";

const btn = _tool._getElementID("test");

const dummie = {
  name: "London",
  countryName: "United Kingdom",
  lat: "51.50853",
  lng: "-0.12574",
};

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
      const { explore, weather } = data;

      fireEploreTemplate(explore);
    })
    .catch((error) => console.log(error));
};

btn.addEventListener("click", getRest);
