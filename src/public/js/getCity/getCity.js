import { handleGetInfo } from "./getInfoHandler/getInfoHandler";
import { fireClarifyTemplate } from "./render/renderClarify";

const axios = require("axios").default;

const fetchCityData = async (values) => {
  console.log("fire:: getCity");
  const res = await axios.post("http://localhost:8082/travel/getcity", {
    values,
  });
  // const res = await axios.post("/travel/getcity", {
  //   values,
  // });
  return res;
};

export const getCity = (e) => {
  e.preventDefault();
  handleGetInfo()
    .then((values) => fetchCityData(values))
    .then((values) => fireClarifyTemplate(values))
    .catch((error) => console.log(error));
};
