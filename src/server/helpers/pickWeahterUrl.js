const { diffFromNow } = require("./diffDate");
const compose = require("../utilities");

/**
 * Use helper diffFromNow to calculate the
 * different between current date and travel date
 * if difference > 7 retrieve forecast url
 * else retrieve current day
 * @param {number} diffDate
 * @returns {string} WeatherBi Api url
 */
const weatherUrl = (diffDate) => {
  return diffDate > 7
    ? "http://api.weatherbit.io/v2.0/forecast/daily?"
    : "http://api.weatherbit.io/v2.0/current?";
};

/**
 * Partial currying
 * Use frirst diffFromNow
 * then call weatherUrl
 * retrieve WeatherBi Api url
 * see @diffFromNow
 * see @weatherUrl
 */
const pickWeatherUrl = compose(weatherUrl, diffFromNow);

exports.weatherUrl = weatherUrl;
exports.pickWeatherUrl = pickWeatherUrl;
