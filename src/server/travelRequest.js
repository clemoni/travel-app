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

const SafeTravelRequest = {
  lat: null,
  lng: null,
  name: null,
  countryName: null,
};

exports.SafeTravelDate = SafeTravelDate;
exports.SafeTravelRequest = SafeTravelRequest;
