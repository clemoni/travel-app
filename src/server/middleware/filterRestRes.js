const { filterPixabay } = require("../helpers/filterPixabay");

const filterRestRes = (req, res, next) => {
  console.log("prep request ");
  ({ weather } = res.locals);
  ({ img } = res.locals);
  // console.log(img);
  res.locals.img = filterPixabay(img);

  next();
};

exports.filterRestRes = filterRestRes;
