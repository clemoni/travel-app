const { SafeTravelDate, SafeTravelCity } = require("../travelRequest");

const sendRestClient = (req, res) => {
  ({ img: explore, weather } = res.locals);

  const travelDate = SafeTravelDate.getDate;
  const travelCity = SafeTravelCity.getCity;

  res.json({ explore, weather, travelCity, travelDate });

  res.end();
};

exports.sendRestClient = sendRestClient;
