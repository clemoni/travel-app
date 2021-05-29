const { SafeTravelDate, SafeTravelCity } = require("../travelRequest");

const sendRestClient = (req, res) => {
  ({ img: explore, weather } = res.locals);

  const travelDate = SafeTravelDate.getDate;
  const travelCity = SafeTravelCity.getCity;
  console.log("send data");
  res.json({ explore, weather, travelCity, travelDate });

  res.end();
};

exports.sendRestClient = sendRestClient;
