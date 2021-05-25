const clarifyTemplate = require("../../views/layout/clarify.handlebars");
import _tool from "fp-dom-tool";

const clarifyContainer = _tool._getElementClass("clarify-city");
const div = _tool._createElement("div")();

export const fireTemplate = () => {
  console.log("hello");
  console.log(clarifyContainer);
  const cities = {
    clarify: true,
    cities: [
      {
        lat: 32,
        long: 34,
        name: "London",
        countryName: "United-Kindom",
        top: true,
      },
      { lat: 32, long: 34, name: "Paris", countryName: "France" },
      { lat: 32, long: 34, name: "Lond", countryName: "Spain" },
    ],
  };
  div.innerHTML = clarifyTemplate(cities);
  _tool._appendElement(clarifyContainer)(div);
};
