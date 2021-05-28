const compose = require("../utilities");

const timestampToMill = (timeStamp) => {
  return timeStamp * 1000;
};

const toDateObject = (converToMill) => {
  return new Date(converToMill);
};

const timestamptoObject = compose(toDateObject, timestampToMill);

const convertToString = (timeFormat) => (timeStamp) => {
  return timestamptoObject(timeStamp).toLocaleString("en-GB", {
    timeZone: timeFormat,
    hour12: false,
  });
};

const getTimeFromTimestamp = (timeFormat) => (timeStamp) => {
  const [, time] = convertToString(timeFormat)(timeStamp).split(",");
  const [h, m, s] = time.split(":");
  return `${h.trim()}:${m.trim()}`;
};

exports.getTimeFromTimestamp = getTimeFromTimestamp;
