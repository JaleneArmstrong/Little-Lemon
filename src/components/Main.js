import "./Main.css";
import { useReducer } from "react";
import HomePage from "./pages/home/HomePage";
import BookingsPage from "./pages/booking/BookingsPage";
import { updateTimes, initializeTimes } from "../utils/times";
import { Routes, Route, useNavigate } from "react-router-dom";
import ConfirmedBooking from "./pages/booking/ConfirmedBooking ";

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    console.log("Form data submitted:", formData);
    if (true) {
      navigate("/confirmed-booking");
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingsPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default Main;
