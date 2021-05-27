const storeRestRequest = (req, res, next) => {
  console.log("prep res");
  res.locals.data = req.query;
  next();
};
exports.storeRestRequest = storeRestRequest;
