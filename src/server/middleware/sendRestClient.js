const { SafeTravelDate } = require("../travelRequest");
const sendRestClient = (req, res) => {
  ({ img: explore, weather, travelCity } = res.locals);
  const travelDate = SafeTravelDate.getDate;
  console.log("send data");
  res.json({ explore, weather, travelCity, travelDate });
  res.end();
};

exports.sendRestClient = sendRestClient;
