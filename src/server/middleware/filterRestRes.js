const { filterPixabay } = require("../helpers/filterPixabay");
const { filterWeater } = require("../helpers/filterWeather");

/**
 * Filter response date from request /getrest
 * Filter date from each API
 * WeatherBi see helper @filterWeater
 * Pixabay see helper @filterPixabay
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const filterRestRes = (req, res, next) => {
  ({ weather } = res.locals);
  ({ timezone } = res.locals);
  ({ img } = res.locals);

  res.locals.weather = filterWeater(timezone)(weather);

  res.locals.img = filterPixabay(img);

  next();
};

exports.filterRestRes = filterRestRes;
