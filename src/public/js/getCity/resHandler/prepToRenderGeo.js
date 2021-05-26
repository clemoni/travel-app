import { compose } from "../../Util/utilities";
import { markTopGeomame } from "./markTopGeoname";
import { filterGeoRes } from "./filterGeoRes";

const composeCities = (arrayData) => {
  const cities = [...arrayData];
  const clarify = true;
  return { clarify, cities };
};

export const prepToRenderGeo = compose(
  composeCities,
  markTopGeomame,
  filterGeoRes
);
