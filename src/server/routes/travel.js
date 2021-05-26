const express = require("express");
const router = express.Router();

const {
  storeTravelReq,
  getCity,
  isEmptyTest,
  filterGeoRes,
  isOneCity,
  sendCitiesClient,
} = require("../controller/getCity");

router.post("/getcity", [
  storeTravelReq,
  getCity,
  isEmptyTest,
  filterGeoRes,
  isOneCity,
  sendCitiesClient,
]);

router.post("/getRest", (req, res, next) => {});

module.exports = router;
