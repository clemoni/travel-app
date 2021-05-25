import { handleGetInfo } from "./getInfoHandler/getInfoHandler";
import { fireTemplate } from "./render/renderClarify";
import { dispatchGeoRes } from "./resHandler/dispatchResGetInfo";
import { prepToRenderGeo } from "./resHandler/prepToRenderGeo";
const axios = require("axios").default;

const fetchCityData = async (values) => {
  console.log("fire:: getCity");
  const res = await axios.post("http://localhost:8082/getcity", { values });
  return res;
};

export const getCity = (e) => {
  e.preventDefault();
  handleGetInfo()
    .then((values) => fetchCityData(values))
    .then((response) => dispatchGeoRes(response))
    .then((data) => prepToRenderGeo(data))
    .then((prepData) => fireTemplate(prepData))
    .catch((error) => console.log(error));
};
