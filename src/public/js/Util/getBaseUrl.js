/**
 * Depending of context production vs dev
 * return localhost+route url or
 * route only
 * @param {string} route
 * @returns {string}
 */
export const getBaseUrl = (route) => {
  const mode = process.env.NODE_ENV;

  return mode === "development" ? `http://localhost:8082${route}` : route;
};
