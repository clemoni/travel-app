const { getTimeFromTimestamp } = require("./convertToDate");

/**
 * Filter usefull value for each day
 * no distinction betweeb main and rest
 * @param {object} weatherDay
 * @returns {object}
 */
const filterCommonValue = (weatherDay) => {
  ({ datetime, temp } = weatherDay);
  ({
    weather: { icon, description },
  } = weatherDay);
  return { datetime, temp, icon, description };
};

/**
 * For the first (main) day retrive fron WeatherBi
 * use main weather display in DOM
 * Require sunrinse and sunset time
 * If forecast sunset and surnise are timestamp
 * Therefore if weatherFirstDay.sunrise === empty then retrieve
 * weatherFirstDay.sunrise_ts and convert it to local in format hh:mm
 * Filter the rest of common useful information
 * @param {string} timeFormat
 * @param {object} weatherFirstDay
 * @returns {object}
 */
const filterWeatherTop = (timeFormat) => (weatherFirstDay) => {
  const sunrise =
    weatherFirstDay.sunrise ||
    getTimeFromTimestamp(timeFormat)(weatherFirstDay.sunrise_ts);

  const sunset =
    weatherFirstDay.sunset ||
    getTimeFromTimestamp(timeFormat)(weatherFirstDay.sunset_ts);

  const commonValue = filterCommonValue(weatherFirstDay);
  return { sunrise, sunset, ...commonValue };
};

/**
 * For other values in array form
 * retrieve useful values
 * @param {Array} weatherRest
 * @returns {Array}
 */
const filterWeatherRest = (weatherRest) => {
  return Object.values(weatherRest).map((weatherDay) => {
    return filterCommonValue(weatherDay);
  });
};

/**
 * Get the first Day and filter usefull values
 * if rest retrive common values
 * @param {string} timeFormat
 * @param {Array} timeFormat
 * @returns {object}
 */
const filterWeater = (timeFormat) => (arrayWeather) => {
  const [weatherFirstDay, ...weatherRest] = arrayWeather;
  const filteredFirstDay = filterWeatherTop(timeFormat)(weatherFirstDay);
  const filteredRestDay = filterWeatherRest(weatherRest);
  return { main: filteredFirstDay, forecast: filteredRestDay };
};

exports.filterWeater = filterWeater;
