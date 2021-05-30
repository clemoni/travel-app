import {
  getErrors,
  filterError,
  dispatchGetInfo,
} from "../src/public/js/getCity/getInfoHandler/getInfoHandler";

describe("Test Form and Dispach errors / valid values", () => {
  test("It test valid value", () => {
    const input = { travelCity: "", travelDate: "" };
    const output = {
      errors: ["Please provide a City", "Please provide a Date", null, null],
      values: ["", ""],
    };

    expect(getErrors(input)).toEqual(expect.objectContaining(output));
  });

  test("It filter null errors", () => {
    const input = {
      errors: ["Please provide a City", "Please provide a Date", null, null],
      values: ["", ""],
    };
    const output = {
      errors: ["Please provide a City", "Please provide a Date"],
      values: ["", ""],
    };

    expect(filterError(input)).toEqual(expect.objectContaining(output));
  });

  test("It filter null errors", () => {
    const input = {
      errors: ["Please provide a City", "Please provide a Date", null, null],
      values: ["", ""],
    };
    const output = {
      errors: ["Please provide a City", "Please provide a Date"],
      values: ["", ""],
    };

    expect(filterError(input)).toEqual(expect.objectContaining(output));
  });

  test("It rejects promise since errors", () => {
    const input = {
      errors: ["Please provide a City", "Please provide a Date"],
      values: ["", ""],
    };
    const output = ["Please provide a City", "Please provide a Date"];

    expect(dispatchGetInfo(input)).rejects.toEqual(
      expect.objectContaining(output)
    );
  });

  test("It rejects promise since errors", () => {
    const input = {
      errors: [],
      values: ["London", "2021/05/26"],
    };
    const output = ["London", "2021/05/26"];

    expect(dispatchGetInfo(input)).resolves.toEqual(
      expect.objectContaining(output)
    );
  });
});
