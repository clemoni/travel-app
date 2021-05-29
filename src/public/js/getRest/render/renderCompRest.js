import { fireInfoExploreTemplate } from "./renderRest";
import { getWeatherMainIcon } from "../../UI/weatherMainlib";
import _tool from "fp-dom-tool";

export const renderCompRest = (data) => {
  const mainIcon = data.weather.main.icon;
  fireInfoExploreTemplate(data);
  const icon = getWeatherMainIcon(mainIcon);
  const style = `linear-gradient(rgba(113, 107, 102, 0.2), rgba(113, 107, 102, 0.2)), url(https://source.unsplash.com/${icon}/1600x900) no-repeat center center/cover`;
  _tool._getElementClass("weather-main").style.background = style;
};
