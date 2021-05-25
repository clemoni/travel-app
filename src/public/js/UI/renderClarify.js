import clarifyTemplate from "../../views/layout/clarify.handlebars";
import _tool from "fp-dom-tool";

const clarifyContainer = _tool._getElementClass("clarify-city");
const div = _tool._createElement("div")(["class", "clarify-city__container"]);

export const fireTemplate = (cities) => {
  div.innerHTML = clarifyTemplate(cities);
  _tool._appendElement(clarifyContainer)(div);
};
