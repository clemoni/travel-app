const storeRestRequest = (req, res, next) => {
  res.locals.data = req.query;

  next();
};
exports.storeRestRequest = storeRestRequest;
