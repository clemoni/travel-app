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

const showCaseBtn = _tool._getElementClass("showcase__btn");
showCaseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("hello");
  // location.hash = "#getIngo";
  // window.location.hash = "#getInfo";
  const el = _tool._getElementID("getInfo");
  window.scrollTo(el.offsetLeft, el.offsetTop);
});

const t_1 = new Date();
const t_2 = new Date();
