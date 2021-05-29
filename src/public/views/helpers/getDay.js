const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

module.exports = function (date) {
  const convertedDate = new Date(date);
  return days[convertedDate.getDay()];
};
