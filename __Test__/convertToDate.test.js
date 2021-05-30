import { getTimeFromTimestamp } from "../src/server/helpers/convertToDate";

describe("getTimeFromTimestamp", () => {
  test("It give the hour:minute of a timeStamp and timeFormat", () => {
    const timeStamp = 1530321260;
    const local = "America/New_York";

    expect(getTimeFromTimestamp(local)(timeStamp)).toBe("21:14");
  });
});
