import { fetchAPI } from "../api/mockAPI";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      const newTimes = fetchAPI(new Date(action.payload.date));
      localStorage.setItem("availableTimes", JSON.stringify(newTimes));
      return newTimes;
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const storedTimes = localStorage.getItem("availableTimes");
  if (storedTimes) {
    return JSON.parse(storedTimes);
  }

  const initialTimes = fetchAPI(new Date());
  localStorage.setItem("availableTimes", JSON.stringify(initialTimes));
  return initialTimes;
};
