// import { SafeTravelDate, SafeTravelCity } from "../src/server/travelRequest";

describe("SafeTravelDate", () => {
  it("should return the date 2021-05-31", () => {
    const { SafeTravelDate } = require("../src/server/travelRequest.js");
    SafeTravelDate.setDate = "2021-05-31";
    console.log(SafeTravelDate.getDate);
    expect(SafeTravelDate.getDate).toBe("2021-05-31");
  });
});

describe("SafeTravelCity", () => {
  it("Should return City London", () => {
    const { SafeTravelCity } = require("../src/server/travelRequest.js");
    SafeTravelCity.setCity = "London";
    //   console.log(SafeTravelCity.getDate);
    expect(SafeTravelCity.getCity).toBe("London");
  });
});
