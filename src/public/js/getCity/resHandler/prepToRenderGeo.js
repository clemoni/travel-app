import { compose } from "../../Util/utilities";
import { filterGeoname } from "./filterGeoname";
import { markTopGeomame } from "./markTopGeoname";

const composeCities = (arrayData) => {
  const cities = [...arrayData];
  const clarify = true;
  return { clarify, cities };
};

export const prepToRenderGeo = compose(
  composeCities,
  markTopGeomame,
  filterGeoname
);
