const axios = require("axios");
const { pickWeatherUrl } = require("../helpers/pickWeahterUrl");

const callWeather = (data, url) => {
  const { lat, lng: lon } = data;
  return axios({
    method: "get",
    url,
    params: {
      key: "dd2a1b84794d47c3ac2504cfc31239ea",
      lat,
      lon,
    },
  });
};

const callPixa = (data) => {
  const { name, countryName } = data;
  return axios({
    method: "get",
    url: "https://pixabay.com/api/?",
    params: {
      key: "9122594-ee92bc002862ba16dc883919c",
      q: `${name}+${countryName}`,
      image_type: "photo",
      orientation: "horizontal",
      per_page: "4",
      category: "travel",
    },
  });
};

const callRestApi = async (data, weatherUrl) => {
  const res = await Promise.all([
    callWeather(data, weatherUrl),
    callPixa(data),
  ]);
  return res;
};

const fetchRest = async (req, res, next) => {
  console.log("get rest call");

  ({ data } = res.locals);
  const weatherUrl = pickWeatherUrl();

  try {
    const resRest = await callRestApi(data, weatherUrl);
    res.locals.weather = resRest[0].data.data;
    res.locals.timezone = resRest[0].data.timezone;

    res.locals.img = resRest[1].data.hits;
    // console.log(res.locals.img);
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.fetchRest = fetchRest;
