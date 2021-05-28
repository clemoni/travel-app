const { getTimeFromTimestamp } = require("./convertToDate");

const filterCommonValue = (weatherDay) => {
  ({ datetime, temp } = weatherDay);
  ({
    weather: { icon, description },
  } = weatherDay);
  return { datetime, temp, icon, description };
};

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

const filterWeatherRest = (weatherRest) => {
  return Object.values(weatherRest).map((weatherDay) => {
    return filterCommonValue(weatherDay);
  });
};

const filterWeater = (timeFormat) => (arrayWeather) => {
  const [weatherFirstDay, ...weatherRest] = arrayWeather;
  const filteredFirstDay = filterWeatherTop(timeFormat)(weatherFirstDay);
  const filteredRestDay = filterWeatherRest(weatherRest);
  return [filteredFirstDay, ...filteredRestDay];
};

exports.filterWeater = filterWeater;
