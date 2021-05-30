const { filterGeoname } = require("../helpers/filterGeoname");

/**
 * Filter response from getCity
 * see @filterGeoname for more details
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const filterGeoRes = (req, res, next) => {
  const { data } = res.locals;

  res.locals.data = filterGeoname(data);
  next();
};

exports.filterGeoRes = filterGeoRes;
