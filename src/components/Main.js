import "./Main.css";
import { useReducer } from "react";
import HomePage from "./pages/home/HomePage";
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingsPage from "./pages/booking/BookingsPage";
import { updateTimes, initializeTimes } from "../utils/times";

const ConfirmedBooking = () => (
  <div style={{ padding: "4rem 5%", textAlign: "center" }}>
    <h1>Booking Confirmed!</h1>
    <p>Thank you for your reservation. We look forward to seeing you!</p>
  </div>
);

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
