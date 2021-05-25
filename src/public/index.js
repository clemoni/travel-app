import _tool from "fp-dom-tool";

// sytle
import "./sass/style.scss";

// UI
import { addUnsplashIcon } from "./js/UI/addUnplashIcon";
addUnsplashIcon();

import { getCity } from "./js/getCity/getCity";

const cityReg = new RegExp("btn form__submit get-info__submit");
const clarifyReg = new RegExp("btn clarify-city__btn*");

const fireForm = (e) => {
  //   console.log(e.target);
  //   console.log(e.target.tagName);

  if (cityReg.test(e.target.className)) {
    getCity(e);
  }
  if (clarifyReg.test(e.target.className) || e.target.tagName === "SPAN") {
    console.log("trigger clarification ");
  }
};

const form = _tool._getElementClass("get-info__form");
form.addEventListener("click", fireForm);
