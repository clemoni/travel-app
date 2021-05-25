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
module.exports = SafeTravelDate;
