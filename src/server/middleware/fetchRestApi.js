const axios = require("axios");
const { pickWeatherUrl } = require("../helpers/pickWeahterUrl");

/**
 * Get request to WeatherBi Api
 * @param {object} data
 * @param {string} url
 * @returns
 */
const callWeather = (data, url) => {
  ({ lat, lng: lon } = data);
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

/**
 * Get request to PixaBay Api
 * @param {object} data
 * @returns
 */
const callPixa = (data) => {
  ({ name, countryName } = data);
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

/**
 * Get request for Both Pixabay and WeatherBi APi
 *  await promise all
 * @param {object} data
 * @param {string} weatherUrl
 * @returns
 */
const callRestApi = async (data, weatherUrl) => {
  const res = await Promise.all([
    callWeather(data, weatherUrl),
    callPixa(data),
  ]);
  return res;
};

/**
 * Middleware, triggered get request to API
 * See @pickWeatherUrl return the correct url
 * to weatherApi depending of the given date
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const fetchRest = async (req, res, next) => {
  ({ data } = res.locals);

  const weatherUrl = pickWeatherUrl();

  try {
    const resRest = await callRestApi(data, weatherUrl);
    // store response.data weatherApi
    res.locals.weather = resRest[0].data.data;
    //store the timezome to later being use when filtering the data date
    res.locals.timezone = resRest[0].data.timezone;
    // store response.data PixaBay
    res.locals.img = resRest[1].data.hits;

    next();
  } catch (err) {
    next(err);
  }
};
exports.fetchRest = fetchRest;
