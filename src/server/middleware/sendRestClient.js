const sendRestClient = (req, res) => {
  ({ img: explore } = res.locals);
  console.log("send data");
  // console.log(img);
  const weather = {};
  res.json({ explore, weather });
  res.end();
};

exports.sendRestClient = sendRestClient;
