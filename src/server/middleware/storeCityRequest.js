const { SafeTravelDate, SafeTravelCity } = require("../travelRequest");

const storeCityRequest = (req, res, next) => {
  const [travelCity, travelDate] = req.body.values;

  // SafeTravelDate.travelDate = travelDate;
  SafeTravelDate.setDate = travelDate;
  SafeTravelCity.setCity = travelCity;

  res.locals.travelCity = travelCity;

  next();
};

exports.storeCityRequest = storeCityRequest;
