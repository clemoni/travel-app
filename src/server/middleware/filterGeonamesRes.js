const { filterGeoname } = require("../helpers/filterGeoname");

const filterGeoRes = (req, res, next) => {
  ({ data } = res.locals);
  res.locals.data = filterGeoname(data);
  next();
};

exports.filterGeoRes = filterGeoRes;
