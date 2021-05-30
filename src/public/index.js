import _tool from "fp-dom-tool";

// sytle
import "./sass/style.scss";

// UI
import { fireIconsToList } from "./js/UI/addUnplashIcon";
fireIconsToList();

import { getCity } from "./js/getCity/getCity";

import { getRest } from "./js/getRest/getRest";

const cityReg = new RegExp("btn form__submit get-info__submit");
const clarifyReg = new RegExp("btn clarify-city__btn*");

//Target on the all form
// if target hit btn form__submit get-info__submit element
// then fire getCity
//
//if target hit btn clarify-city__btn* and children
// then fire getRest
const fireForm = (e) => {
  if (cityReg.test(e.target.className)) {
    getCity(e);
  }

  if (clarifyReg.test(e.target.className) || e.target.tagName === "SPAN") {
    getRest(e);
  }
};

// Main action
const form = _tool._getElementClass("get-info__form");
form.addEventListener("click", fireForm);

// Get Button fron element showcase
// and move to form
// Use only for Device display
// since btn is remove when desktop display
const showCaseBtn = _tool._getElementClass("showcase__btn");
showCaseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const el = _tool._getElementID("getInfo");
  window.scrollTo(el.offsetLeft, el.offsetTop);
});

if (process.env.NODE_ENV === "production") {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
}
