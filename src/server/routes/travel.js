const express = require("express");
const router = express.Router();

// Middleware POST /getcity
// receive data from from and store then in travelRequest
const { storeCityRequest } = require("../middleware/storeCityRequest");
//fetch city by calling geonames Api
const { fetchGeonames } = require("../middleware/fetchGeonames");
// run test is return emtpy > if true > trigger error
const { isEmptyGeonames } = require("../middleware/isEmptyGeonames");
// filter response with only usefull info lat, long, city name and country
const { filterGeoRes } = require("../middleware/filterGeonamesRes");
// if there is only on choice of city return > REDIRECT to /getrest
const { isOneCity } = require("../middleware/isOneCity");
// set response back to client side
const { sendCitiesClient } = require("../middleware/sendCitiesClient");

// Middleware GET /getrest
// receive data and store
const { storeRestRequest } = require("../middleware/storeRestRequest");
// fetch request to WeatherBit and Pixabay
// Perform promise.all since both request are expected
// watch: data use to ran sometimes empty generating error
// solved by parsing data and filtering usefull value for each request
const { fetchRest } = require("../middleware/fetchRestApi");
// filter only usefull information
const { filterRestRes } = require("../middleware/filterRestRes");
// send response back to client
const { sendRestClient } = require("../middleware/sendRestClient");

router.post("/getcity", [
  storeCityRequest,
  fetchGeonames,
  isEmptyGeonames,
  filterGeoRes,
  isOneCity,
  sendCitiesClient,
]);

router.get("/getrest", [
  storeRestRequest,
  fetchRest,
  filterRestRes,
  sendRestClient,
]);

module.exports = router;
