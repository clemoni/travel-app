const axios = require("axios");

const callGeonames = async (city) => {
  const res = await axios({
    method: "get",
    url: "http://api.geonames.org/searchJSON?",
    params: {
      name: city,
      name_equals: city,
      maxRows: 3,
      username: process.env.API_GEO,
    },
  });
  return res;
};

const fetchGeonames = async (req, res, next) => {
  try {
    const response = await callGeonames(res.locals.travelCity);
    res.locals.data = await response.data;
    next();
  } catch (err) {
    next(err);
  }
};

exports.fetchGeonames = fetchGeonames;
