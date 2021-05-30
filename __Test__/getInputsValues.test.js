import { getGetInfoInputsValues } from "../src/public/js/getCity/getInfoHandler/getInputsValues";

describe("Test Form and Dispach errors / valid values", () => {
  test("It test valid value", () => {
    document.body.innerHTML =
      '<input type="text" class="form__input" id="travel-city" name="travel-city" value="London" />' +
      '<input type="date" class="form__input" id="travel-date" name="travel-date" value="2021-05-26" />';

    // document.body.innerHTML = test;

    const output = { travelCity: "London", travelDate: "2021-05-26" };
    expect(getGetInfoInputsValues()).toEqual(expect.objectContaining(output));
  });
});
