const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");

const {
  storeTravelReq,
  getCity,
  isEmptyTest,
  isOneCity,
  sendCitiesClient,
} = require("./controller/getCity");

const SafeTravelDate = require("./travelRequest");
const diffFromNow = require("./helpers/diffDate");

require("colors");

// require("dotenv").config({
//   path: path.resolve(__dirname, "../../config/.env"),
// });

const app = express();
const PORT = process.env.PORT || 8082;

// Midleware
app.use(express.static("dist"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  path.join(__dirname, "../../dist/index.html");
});

const dummie = {
  name: "Arras",
  countryName: "Germany",
  lat: "51.05601",
  lng: "12.90432",
  travelDate: "2021-05-30",
};

// app.use("/getcity", checkResponse);

app.post("/getcity", [
  storeTravelReq,
  getCity,
  isEmptyTest,
  isOneCity,
  sendCitiesClient,
]);

// dd2a1b84794d47c3ac2504cfc31239ea

app.post("/getrest", (req, res) => {
  console.log("hello");
  // const { values: travelCity } = req.body;
  // const travelCity = { ...dummie };
  // const travelDate = SafeTravelDate.travelDate;
  // console.log(travelDate);
  // console.log(diffFromNow(travelDate));

  // ({ lat, lng: lon, name, countryName } = travelCity);
  // axios({
  //   method: "get",
  //   url: "http://api.weatherbit.io/v2.0/current?",
  //   params: {
  //     key: "dd2a1b84794d47c3ac2504cfc31239ea",
  //     lat,
  //     lon,
  //   },
  // }).then((response) => console.log(response.data));

  // axios({
  //   method: "get",
  //   url: "http://api.weatherbit.io/v2.0/forecast/daily?",
  //   params: {
  //     key: "dd2a1b84794d47c3ac2504cfc31239ea",
  //     lat,
  //     lon,
  //   },
  // }).then((response) => console.log(response.data));
  // axios({
  //   method: "get",
  //   url: "https://pixabay.com/api/?",
  //   params: {
  //     key: "9122594-ee92bc002862ba16dc883919c",
  //     q: `${name}+${countryName}`,
  //     image_type: "photo",
  //     per_page: "3",
  //     category: "travel",
  //   },
  // }).then((response) => console.log(response.data));
});

app.use((err, req, res, next) => {
  ({ message } = err);
  res.status(409).json({ message });
});

app.listen(PORT, (error) => {
  try {
    console.log(`Server running on PORT: ${PORT}`.yellow.inverse);
  } catch (err) {
    console.log(`An error happned ... ${err.message}`.red.inverse);
  }
});
