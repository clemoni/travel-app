const isEmptyGeonames = (req, res, next) => {
  ({ totalResultsCount, geonames } = res.locals.data);
  if (totalResultsCount === 0) {
    throw new Error("The city you entered couldn't be found");
  } else {
    res.locals.data = geonames;
    next();
  }
};

exports.isEmptyGeonames = isEmptyGeonames;
