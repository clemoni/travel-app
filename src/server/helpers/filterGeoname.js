/**
 * Filter response.date from geonamesAPi
 * @param {object} data
 * @returns {object} filter response.date fron geonames
 */
const filterGeoname = (data) => {
  return Object.values(data).map((value) => {
    const { lat, lng, name, countryName } = value;
    return { lat, lng, name, countryName };
  });
};

exports.filterGeoname = filterGeoname;
