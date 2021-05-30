const { diffFromNow } = require("./diffDate");
const compose = require("../utilities");

const weatherUrl = (diffDate) => {
  return diffDate > 7
    ? "http://api.weatherbit.io/v2.0/forecast/daily?"
    : "http://api.weatherbit.io/v2.0/current?";
};

const pickWeatherUrl = compose(weatherUrl, diffFromNow);

exports.weatherUrl = weatherUrl;
exports.pickWeatherUrl = pickWeatherUrl;
