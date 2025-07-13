import { initializeTimes, updateTimes } from "../utils/times";

describe("initializeTimes", () => {
  test("returns the correct initial times", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    expect(initializeTimes()).toEqual(expectedTimes);
  });
});

describe("updateTimes", () => {
  test("returns the same state that is provided", () => {
    const currentState = ["17:00", "18:00", "19:00"];
    const action = { type: "ANY_ACTION" };
    const newState = updateTimes(currentState, action);
    expect(newState).toEqual(currentState);
  });
});
