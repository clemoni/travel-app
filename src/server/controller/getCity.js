const axios = require("axios");
const { filterGeoname } = require("../helpers/filterGeoname");
const { prepGetRest } = require("./getRest");

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
};

const isEmptyTest = (req, res, next) => {
  ({ totalResultsCount, geonames } = res.locals.data);
  if (totalResultsCount === 0) {
    throw new Error("The city you entered couldn't be found");
  } else {
    res.locals.data = geonames;
    next();
  }
};

const filterGeoRes = (req, res, next) => {
  ({ data } = res.locals);
  res.locals.data = filterGeoname(data);
  next();
};

const isOneCity = (req, res, next) => {
  ({ data } = res.locals);
  console.log("is one?");
  if (data.length === 1) {
    console.log("just one");
    prepGetRest();
  } else {
    next();
  }
};

const sendCitiesClient = (req, res) => {
  ({ data } = res.locals);
  res.json(data);
};
exports.storeTravelReq = storeTravelReq;
exports.getCity = getCity;
exports.isEmptyTest = isEmptyTest;
exports.filterGeoRes = filterGeoRes;
exports.isOneCity = isOneCity;
exports.sendCitiesClient = sendCitiesClient;
