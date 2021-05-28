import _tool from "fp-dom-tool";

// sytle
import "./sass/style.scss";

// UI
import { addUnsplashIcon } from "./js/UI/addUnplashIcon";
addUnsplashIcon();

import { getCity } from "./js/getCity/getCity";

import { getRest } from "./js/getRest/getRest";

const cityReg = new RegExp("btn form__submit get-info__submit");
const clarifyReg = new RegExp("btn clarify-city__btn*");

const fireForm = (e) => {
  if (cityReg.test(e.target.className)) {
    getCity(e);
  }

  if (clarifyReg.test(e.target.className) || e.target.tagName === "SPAN") {
    getRest(e);
  }
};

const form = _tool._getElementClass("get-info__form");
form.addEventListener("click", fireForm);

// import { compose } from "./js/Util/utilities";

// const timestampToMill = (timeStamp) => {
//   return timeStamp * 1000;
// };

// const toDateObject = (converToMill) => {
//   return new Date(converToMill);
// };

// const timestamptoObject = compose(toDateObject, timestampToMill);

// const convertToString = (timeFormat) => (timeStamp) => {
//   return timestamptoObject(timeStamp).toLocaleString("en-GB", {
//     timeZone: timeFormat,
//   });
// };

// const getTimeFromTimestamp = (timeFormat) => (timeStamp) => {
//   const [, time] = convertToString(timeFormat)(timeStamp).split(",");
//   const [h, m, s] = time.split(":");
//   return `${h}:${m}`;
// };
// const rise = 1622173954;

// const t = "Europe/Paris";

// // console.log(timestamptoString(rise));
// // console.log(convertToString(t)(rise));
// console.log(getTimeFromTimestamp(t)(rise));
