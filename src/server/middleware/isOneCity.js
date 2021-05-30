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
  ({ data } = res.locals);
  console.log("is one?");

  if (data.length === 1) {
    [{ lat, lng, name, countryName }] = data;

    res.locals.isOneCity = true;
    console.log("just one");

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
