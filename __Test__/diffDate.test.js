import { diffFromNow } from "../src/server/helpers/diffDate";
import { SafeTravelDate } from "../src/server/travelRequest";

// jest.mock("../src/server/travelRequest.js");

describe("DiffFromNow", () => {
  test("it", () => {
    const today = Date.now();

    SafeTravelDate.setDate = today;

    expect(diffFromNow()).toBe(0);
  });
});
