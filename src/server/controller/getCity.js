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

const storeTravelReq = (req, res, next) => {
  const [travelCity, travelDate] = req.body.values;
  res.locals.travelDate = travelDate;
  res.locals.travelCity = travelCity;
  next();
};

const getCity = async (req, res, next) => {
  try {
    const response = await callGeonames(res.locals.travelCity);
    res.locals.data = response.data;
    next();
  } catch (err) {
    next(err);
  }

  // next(response);
  // .then((response) => {
  //   SafeTravelDate.setDate = travelDate;
  //   res.json(response.data.geonames);
  // })
  // .catch((error) => {
  //   res.json(409, {
  //     error: `Message Perso:: ${error.message}`,
  //   });
  // });
};

const isEmptyTest = (req, res, next) => {
  ({ totalResultsCount } = res.locals.data);
  if (totalResultsCount === 0) {
    throw new Error("The city you entered couldn't be found");
  } else {
    next();
  }
};

const isOneCity = (req, res, next) => {
  ({ geonames } = res.locals.data);
  if (geonames.length === 1) {
    console.log("just one");
    next("route");
  } else {
    next();
  }
};
const sendCitiesClient = (req, res) => {
  ({ geonames } = res.locals.data);
  res.json(geonames);
};
exports.storeTravelReq = storeTravelReq;
exports.getCity = getCity;
exports.isEmptyTest = isEmptyTest;
exports.isOneCity = isOneCity;
exports.sendCitiesClient = sendCitiesClient;
