const { filterPixabay } = require("../helpers/filterPixabay");
const { filterWeater } = require("../helpers/filterWeather");

const filterRestRes = (req, res, next) => {
  console.log("prep request ");
  ({ weather } = res.locals);
  ({ timezone } = res.locals);
  ({ img } = res.locals);

  res.locals.weather = filterWeater(timezone)(weather);

  res.locals.img = filterPixabay(img);

  next();
};

exports.filterRestRes = filterRestRes;
