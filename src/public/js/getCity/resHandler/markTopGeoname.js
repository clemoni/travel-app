export const markTopGeomame = (arrayGeo) => {
  const [topGeo, ...rest] = arrayGeo;
  topGeo.top = true;
  return [topGeo, ...rest];
};
