const axios = require("axios");

const callGeonames = async (city) => {
  const res = await axios({
    method: "get",
    url: "http://api.geonames.org/searchJSON?",
    params: {
      name: city,
      name_equals: city,
      maxRows: 5,
      username: "clemoni",
    },
  });
  return res;
};

const getCity = (req, res) => {
  const [city] = req.body.values;

  callGeonames(city)
    .then((response) => res.json(response.data.geonames))
    .catch((error) => {
      res.json(409, {
        error: `Message Perso:: ${error.message}`,
      });
    });
};

module.exports = getCity;
