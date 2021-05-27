const sendCitiesClient = (req, res) => {
  ({ data } = res.locals);
  res.json(data);
  res.end();
};

exports.sendCitiesClient = sendCitiesClient;
