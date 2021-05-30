import exploreInfoTemplate from "../../../views/layout/infoExplore.handlebars";
import { compose } from "../../Util/utilities";
import _tool from "fp-dom-tool";

import {
  initContainer,
  initChild,
  initTemplate,
  composedChild,
  buildTemplate,
} from "../../Util/renderTemplate";

//Use renderTemplate module to create render the handlebars template
// for infoExplore

const infoExploreContainer = initContainer("weather-explore");
const infoExploreChild = initChild("weather-explore");

const initInfoExploreTemplate = initTemplate(exploreInfoTemplate);

const composeInfoExploreChild = composedChild(infoExploreChild);

const buildInfoExploreTemplate = buildTemplate(infoExploreContainer);

//Chaining to only use fireInfoExploreTemplate(data)
export const fireInfoExploreTemplate = compose(
  buildInfoExploreTemplate,
  composeInfoExploreChild,
  initInfoExploreTemplate
);
