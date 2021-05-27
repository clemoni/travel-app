const { SafeTravelDate } = require("../travelRequest");

const storeCityRequest = (req, res, next) => {
  const [travelCity, travelDate] = req.body.values;

  SafeTravelDate.travelDate = travelDate;
  res.locals.travelCity = travelCity;

  next();
};

exports.storeCityRequest = storeCityRequest;
