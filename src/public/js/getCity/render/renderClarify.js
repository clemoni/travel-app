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

const clarifyContainer = initContainer("clarify-city");
const clarifyChild = initChild("clarify-city");

const initClarifyTemplate = initTemplate(clarifyTemplate);

const composeClarifyChild = composedChild(clarifyChild);

const buildClarifyTemplate = buildTemplate(clarifyContainer);

export const fireClarifyTemplate = compose(
  buildClarifyTemplate,
  composeClarifyChild,
  initClarifyTemplate,
  prepToRenderGeo
);
