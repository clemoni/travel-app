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

const infoExploreContainer = initContainer("info-explore");
const infoExploreChild = initChild("info-explore");

const initInfoExploreTemplate = initTemplate(exploreInfoTemplate);

const composeInfoExploreChild = composedChild(infoExploreChild);

const buildInfoExploreTemplate = buildTemplate(infoExploreContainer);

export const fireInfoExploreTemplate = compose(
  buildInfoExploreTemplate,
  composeInfoExploreChild,
  initInfoExploreTemplate
);

// // const infoExploreContainer = initContainer("info-explore");
// // const infoExploreChild = initChild("info-explore");

// const div = _tool._createElement("div")();
// const container = _tool._getElementClass("info-explore");

// export const fireInfoExploreTemplate = (data) => {
//   div.innerHTML = exploreInfoTemplate(data);
//   _tool._appendElement(container)(div);
// };
