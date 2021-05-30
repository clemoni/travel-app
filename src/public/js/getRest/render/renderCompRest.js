import { fireInfoExploreTemplate } from "./renderRest";
import { getWeatherMainIcon } from "../../UI/weatherMainlib";
import _tool from "fp-dom-tool";

/**
 * Bundle use for getRest but also getCity if only one city
 * has been returned from geonames API
 * @param {*} data
 */
export const renderCompRest = (data) => {
  const mainIcon = data.weather.main.icon; // get the icom from Main Weather
  // render InfoExplore handlebars
  fireInfoExploreTemplate(data);
  const icon = getWeatherMainIcon(mainIcon); // retrieve the weather image ID use a background image
  // change the blackground style for main weather
  const style = `linear-gradient(rgba(113, 107, 102, 0.2), rgba(113, 107, 102, 0.2)), url(https://source.unsplash.com/${icon}/1600x900) no-repeat center center/cover`;
  _tool._getElementClass("weather-main").style.background = style;
  // force scroll to move to weatherExplore to Display the results
  const el = _tool._getElementID("weatherExplore");
  window.scrollTo(el.offsetLeft, el.offsetTop);
};
