import _tool from "fp-dom-tool";

// sytle
import "./sass/style.scss";

const axios = require("axios").default;

// UI
import { addUnsplashIcon } from "./js/UI/addUnplashIcon";
addUnsplashIcon();

import { handleGetInfo } from "./js/getInfoHandler/getInfoHandler";

// test
import { getGetInfoInputsValues } from "./js/getInfoHandler/getInputsValues";
import { dateIsNotPast } from "./js/dateHelper/isNotPast";
import { fireTemplate } from "./js/UI/renderClarify";
import {
  filterGeoRes,
  dispatchGeoRes,
} from "./js/resHandler/dispatchResGetInfo";

const getCity = async (values) => {
  console.log("fire:: getCity");
  const res = await axios.post("http://localhost:8082/getcity", { values });
  return res;
};

const getInfoBtn = _tool._getElementClass("get-info__submit");
getInfoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //   const values = getGetInfoInputsValues();

  //   const { travelDate } = values;
  //   console.log(dateIsNotPast(travelDate));
  //   fireTemplate();
  handleGetInfo()
    .then((values) => getCity(values))
    .then((response) => dispatchGeoRes(response))
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
});
