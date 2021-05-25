const axios = require("axios");
const SafeTravelDate = require("../travelRequest");

const callGeonames = async (city) => {
  const res = await axios({
    method: "get",
    url: "http://api.geonames.org/searchJSON?",
    params: {
      name: city,
      name_equals: city,
      maxRows: 3,
      username: "clemoni",
    },
  });
  return res;
};

const getCity = (req, res) => {
  const [travelCity, travelDate] = req.body.values;

  callGeonames(travelCity)
    .then((response) => {
      SafeTravelDate.setDate = travelDate;
      res.json(response.data.geonames);
    })
    .catch((error) => {
      res.json(409, {
        error: `Message Perso:: ${error.message}`,
      });
    });
};

module.exports = getCity;
