const filterRestRes = (req, res, next) => {
  console.log("prep request ");
  ({ weather } = res.locals);
  ({ img } = res.locals);
  console.log(weather);
};

exports.filterRestRes = filterRestRes;
