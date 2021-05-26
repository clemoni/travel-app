const callWeather = async (city) => {
  const res = await axios({
    method: "get",
    url: "http://api.weatherbit.io/v2.0/current?",
    params: {
      key: "dd2a1b84794d47c3ac2504cfc31239ea",
      lat,
      lon,
    },
  });
  return res;
};

const prepGetRest = (req, res, next) => {
  console.log("hello,Im the rest");
  res.json("ok");
};

exports.prepGetRest = prepGetRest;
