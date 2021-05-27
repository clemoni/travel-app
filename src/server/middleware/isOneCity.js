const url = require("url");

const isOneCity = (req, res, next) => {
  ({ data } = res.locals);
  console.log("is one?");

  if (data.length === 1) {
    [{ lat, lng, name, countryName }] = data;

    res.locals.isOneCity = true;
    console.log("just one");

    res.redirect(
      url.format({
        pathname: "/travel/getrest/",
        query: { name, countryName, lat, lng },
      })
    );
  } else {
    next();
  }
};

exports.isOneCity = isOneCity;
