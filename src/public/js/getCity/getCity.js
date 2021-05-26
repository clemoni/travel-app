import { handleGetInfo } from "./getInfoHandler/getInfoHandler";
import { prepToRenderGeo } from "./resHandler/prepToRenderGeo";
import { fireTemplate } from "./render/renderClarify";

const axios = require("axios").default;

const fetchCityData = async (values) => {
  console.log("fire:: getCity");
  const res = await axios.post("http://localhost:8082/travel/getcity", {
    values,
  });
  return res;
};

export const getCity = (e) => {
  e.preventDefault();
  handleGetInfo()
    .then((values) => fetchCityData(values))
    .then((response) => prepToRenderGeo(response))
    .then((prepData) => fireTemplate(prepData))
    .catch((error) => console.log(error.response.data.message));
};
