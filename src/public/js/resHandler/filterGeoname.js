export const filterGeoname = (data) => {
  return Object.values(data).map((value) => {
    const { lat, lng, name, countryName } = value;
    return { lat, lng, name, countryName };
  });
};
