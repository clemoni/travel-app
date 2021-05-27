const express = require("express");
const router = express.Router();

// Middleware POST /getcity
const { storeCityRequest } = require("../middleware/storeCityRequest");
const { fetchGeonames } = require("../middleware/fetchGeonames");
const { isEmptyGeonames } = require("../middleware/isEmptyGeonames");
const { filterGeoRes } = require("../middleware/filterGeonamesRes");
const { isOneCity } = require("../middleware/isOneCity");
const { sendCitiesClient } = require("../middleware/sendCitiesClient");

// Middleware GET /getrest
const { storeRestRequest } = require("../middleware/storeRestRequest");
const { fetchRest } = require("../middleware/fetchRestApi");
const { filterRestRes } = require("../middleware/filterRestRes");

router.post("/getcity", [
  storeCityRequest,
  fetchGeonames,
  isEmptyGeonames,
  filterGeoRes,
  isOneCity,
  sendCitiesClient,
]);

router.get("/getrest/", [storeRestRequest, fetchRest, filterRestRes]);

module.exports = router;
