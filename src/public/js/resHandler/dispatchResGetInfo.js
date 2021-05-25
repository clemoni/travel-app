import { compose } from "../utilities";

const filterGeoRes = (response) => {
  const { data } = response;
  return data;
};

const dispatchGeoData = (data) => {
  return new Promise((resolve, reject) => {
    return data.length !== 0 ? resolve(data) : reject("ca ne va pas");
  });
};

export const dispatchGeoRes = compose(dispatchGeoData, filterGeoRes);
