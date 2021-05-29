import _tool from "fp-dom-tool";
import axios from "axios";
import { fireInfoExploreTemplate } from "./render/renderRest";
import { getWeatherMainIcon } from "../UI/weatherMainlib";

const prepToRequest = (city) => {
  const lat = city.getAttribute("lat");
  const lng = city.getAttribute("lng");
  const name = city.getAttribute("name");
  const countryName = city.getAttribute("country-name");
  return { name, countryName, lat, lng };
};

const fetchRest = async (values) => {
  console.log("fire:: getRest");
  const res = await axios.get("http://localhost:8082/travel/getrest/", {
    params: values,
  });
  return res;
};

export const getRest = (e) => {
  const prepedRequest = prepToRequest(e.target);
  e.preventDefault();
  fetchRest(prepedRequest)
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
      const mainIcon = data.weather.main.icon;
      fireInfoExploreTemplate(data);
      const icon = getWeatherMainIcon(mainIcon);
      const style = `linear-gradient(rgba(113, 107, 102, 0.2), rgba(113, 107, 102, 0.2)), url(https://source.unsplash.com/${icon}/1600x900) no-repeat center center/cover`;
      _tool._getElementClass("weather-main").style.background = style;
    })
    .catch((error) => console.log(error));
};
