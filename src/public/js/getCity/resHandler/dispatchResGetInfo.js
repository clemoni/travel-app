import { compose } from "../../Util/utilities";

const filterGeoRes = (response) => {
  const { data } = response;
  return data;
};

const dispatchGeoData = (data) => {
  return new Promise((resolve, reject) => {
    return data.length !== 0
      ? resolve(data)
      : reject("The city you entered is unknown...");
  });
};

export const dispatchGeoRes = compose(dispatchGeoData, filterGeoRes);
