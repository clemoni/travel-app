export const getBaseUrl = (route) => {
  const mode = process.env.NODE_ENV;

  return mode === "development" ? `http://localhost:8082${route}` : route;
};
