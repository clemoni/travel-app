/**
SafeTravelDate and SafeTravelCity are both used temporary store 
the value travel-Date and travel-city between the requests
/getcity and /getrest

The object SafeTravelDate and SafeTravelCity are reset after request completion
 */

const SafeTravelDate = {
  set setDate(date) {
    this.travelDate = date;
  },
  get getDate() {
    return this.travelDate;
  },
  travelDate: null,
};

Object.defineProperty(SafeTravelDate, "reset", {
  get: function () {
    this.travelDate = null;
  },
});

const SafeTravelCity = {
  set setCity(city) {
    this.travelCity = city;
  },
  get getCity() {
    return this.travelCity;
  },
  travelCity: null,
};

Object.defineProperty(SafeTravelCity, "reset", {
  get: function () {
    this.travelCity = null;
  },
});

exports.SafeTravelDate = SafeTravelDate;
exports.SafeTravelCity = SafeTravelCity;
