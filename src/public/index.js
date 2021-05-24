import _tool from "fp-dom-tool";

// sytle
import "./sass/style.scss";
import(
  /* webpackPreload: true */ "@fortawesome/fontawesome-free/js/fontawesome"
);
import(/* webpackPreload: true */ "@fortawesome/fontawesome-free/js/solid");
import(/* webpackPreload: true */ "@fortawesome/fontawesome-free/js/regular");
import(/* webpackPreload: true */ "@fortawesome/fontawesome-free/js/brands");
const axios = require("axios").default;

// insert img
import unsplashIconImg from "./img/unsplash.png";
const unsplashIcon = _tool._getElementID("unsplash-icon");
unsplashIcon.setAttribute("src", unsplashIconImg);
console.log(unsplashIcon);

const getCity = async () => {
  const res = await axios({
    method: "get",
    url: "http://api.geonames.org/searchJSON?",
    params: {
      name: "Arras",
      name_equals: "Arras",
      maxRows: 5,
      isNameRequired: true,
      username: "clemoni",
    },
  });

  return res;
};

// btn.addEventListener("click", () => {
//   console.log("click");
//   getCity()
//     .then((res) => {
//       console.log(res);
//       return res.data;
//     })
//     .then((data) => console.log(data));
// });
