const { filterGeoname } = require("../helpers/filterGeoname");

const filterGeoRes = (req, res, next) => {
  const { data } = res.locals;
  console.log(data);
  res.locals.data = filterGeoname(data);
  next();
};

exports.filterGeoRes = filterGeoRes;
