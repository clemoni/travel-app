import clarifyTemplate from "../../../views/layout/clarify.handlebars";
import { prepToRenderGeo } from "../resHandler/prepToRenderGeo";
import { compose } from "../../Util/utilities";
import {
  initContainer,
  initChild,
  initTemplate,
  composedChild,
  buildTemplate,
} from "../../Util/renderTemplate";

//Use renderTemplate module to render clarify handlebars
const clarifyContainer = initContainer("clarify-city");
const clarifyChild = initChild("clarify-city");

const initClarifyTemplate = initTemplate(clarifyTemplate);

const composeClarifyChild = composedChild(clarifyChild);

const buildClarifyTemplate = buildTemplate(clarifyContainer);

// Chaining
// in order that only fireClarifyTemplate(date) can be used
// see renderTemplate @../../Util/renderTemplate
export const fireClarifyTemplate = compose(
  buildClarifyTemplate,
  composeClarifyChild,
  initClarifyTemplate,
  prepToRenderGeo
);
