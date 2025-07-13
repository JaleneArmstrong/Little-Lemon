import { initializeTimes, updateTimes } from "../utils/times";
import { fetchAPI } from "../api/mockAPI";

jest.mock("../api/mockAPI", () => ({
  fetchAPI: jest.fn(),
}));

describe("initializeTimes", () => {
  beforeEach(() => {
    fetchAPI.mockClear();
  });

  test("returns the times fetched from the API", () => {
    const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    fetchAPI.mockReturnValue(mockTimes);

    expect(initializeTimes()).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledTimes(1);
  });
});

describe("updateTimes", () => {
  beforeEach(() => {
    fetchAPI.mockClear();
  });

  test("returns new times based on the pre-selected date in the action", () => {
    const currentState = ["17:00", "18:00", "19:00"];
    const selectedDate = new Date("2025-07-15");
    const expectedNewTimes = ["17:00", "18:00", "19:00", "20:00"];

    fetchAPI.mockReturnValue(expectedNewTimes);

    const action = { type: "UPDATE_TIMES", payload: { date: selectedDate } };
    const newState = updateTimes(currentState, action);

    expect(newState).toEqual(expectedNewTimes);
    expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
  });

  test("returns the current state if the action type is not 'UPDATE_TIMES'", () => {
    const currentState = ["17:00", "18:00", "19:00"];
    const action = { type: "ANY_OTHER_ACTION" };
    const newState = updateTimes(currentState, action);
    expect(newState).toEqual(currentState);
    expect(fetchAPI).not.toHaveBeenCalled();
  });
});
