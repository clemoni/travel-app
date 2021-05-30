import { weatherUrl } from "../src/server/helpers/pickWeahterUrl";

describe("Pick the url weatherbit Api depending of days", () => {
  test("it give forecast weather since day > 7", () => {
    const output = "http://api.weatherbit.io/v2.0/forecast/daily?";

    expect(weatherUrl(9)).toBe(output);
  });

  test("it give current weather  since < 7", () => {
    const output = "http://api.weatherbit.io/v2.0/current?";
    expect(weatherUrl(3)).toBe(output);
  });
});
