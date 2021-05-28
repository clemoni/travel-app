import exploreTemplate from "../../../views/layout/explore.handlebars";
import { compose } from "../../Util/utilities";
import { prepToRenderExplore } from "../getRestResHandler/prepToRenderExplore";
import {
  initContainer,
  initChild,
  initTemplate,
  composedChild,
  buildTemplate,
} from "../../Util/renderTemplate";

const exploreContainer = initContainer("explore");
const exploreChild = initChild("explore");

const initExploreTemplate = initTemplate(exploreTemplate);

const composeExploreChild = composedChild(exploreChild);

const buildExploreTemplate = buildTemplate(exploreContainer);

export const fireEploreTemplate = compose(
  buildExploreTemplate,
  composeExploreChild,
  initExploreTemplate,
  prepToRenderExplore
);
