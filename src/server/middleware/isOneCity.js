const url = require("url");

/**
 * Middleware, check response fron geonames
 * if only one entity returned redirect to  "/travel/getrest",
 * test with "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch" in Wales
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const isOneCity = (req, res, next) => {
  const { data } = res.locals;

  if (data.length === 1) {
    [{ lat, lng, name, countryName }] = data;

    res.locals.isOneCity = true;

    res.redirect(
      url.format({
        pathname: "/travel/getrest",
        query: { name, countryName, lat, lng },
      })
    );
  } else {
    next();
  }
};

exports.isOneCity = isOneCity;
