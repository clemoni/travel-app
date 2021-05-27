const { SafeTravelRequest } = require("../travelRequest");

const pickNoEmpty = (res) => {
  return !res ? SafeTravelRequest : res.locals.data;
};
exports.pickNoEmpty = pickNoEmpty;
