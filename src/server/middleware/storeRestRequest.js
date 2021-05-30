const storeRestRequest = (req, res, next) => {
  res.locals.data = req.query;

  console.log(res.locals.data);
  next();
};
exports.storeRestRequest = storeRestRequest;
