const storeRestRequest = (req, res, next) => {
  res.locals.data = req.query;
  // {
  //   name: 'London',
  //   countryName: 'United Kingdom',
  //   lat: '51.50853',
  //   lng: '-0.12574'
  // }
  // console.log(res.locals.data);
  // console.log("prep res: ok");
  next();
};
exports.storeRestRequest = storeRestRequest;
