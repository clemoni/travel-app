import { isDate } from "../src/public/js/getCity/dateHelper/isDate";
import { dateIsNotPast } from "../src/public/js/getCity/dateHelper/isNotPast";

describe("dateHelper", () => {
  test("it return true when date is format yyyy-mm-dd", () => {
    const input = "2021-05-26";
    expect(isDate(input)).toBe(true);
  });
  test("it return false if date format yyyy-mm-dd", () => {
    const input = "not a date";
    expect(isDate(input)).toBe(false);
  });

  test("it return false if date before current day", () => {
    const input = "1986-05-26";
    expect(dateIsNotPast(input)).toBe(false);
  });

  test("it return true if date after current day", () => {
    const input = "2086-05-26";
    expect(dateIsNotPast(input)).toBe(true);
  });
});
