import React, { useState, useEffect } from "react";
import "./Booking.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const today = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(today);
  const [time, setTime] = useState(
    availableTimes.length > 0 ? availableTimes[0] : ""
  );
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("");

  const [isDateValid, setIsDateValid] = useState(true);
  const [isTimeValid, setIsTimeValid] = useState(true);
  const [isGuestsValid, setIsGuestsValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", payload: { date: date } });
  }, [date, dispatch]);

  useEffect(() => {
    setIsFormValid(isDateValid && isTimeValid && isGuestsValid);
  }, [isDateValid, isTimeValid, isGuestsValid]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    setIsDateValid(newDate !== "" && newDate >= today);
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setTime(newTime);
    setIsTimeValid(newTime !== "" && availableTimes.includes(newTime));
  };

  const handleGuestsChange = (e) => {
    const newGuests = e.target.value;
    setGuests(newGuests);
    const numGuests = parseInt(newGuests, 10);
    setIsGuestsValid(numGuests >= 1 && numGuests <= 10 && !isNaN(numGuests));
  };

  const handleOccasionChange = (e) => {
    const newOccasion = e.target.value;
    setOccasion(newOccasion);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalIsFormValid =
      date !== "" &&
      date >= today &&
      time !== "" &&
      availableTimes.includes(time) &&
      parseInt(guests, 10) >= 1 &&
      parseInt(guests, 10) <= 10 &&
      !isNaN(parseInt(guests, 10));

    if (finalIsFormValid) {
      const formData = { date, time, guests: parseInt(guests, 10), occasion };
      submitForm(formData);
    } else {
      console.log("Form is invalid. Please check the fields.");
      e.target.reportValidity();
    }
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "400px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        min={today}
        aria-invalid={!isDateValid}
        aria-describedby="date-error"
      />
      {!isDateValid && (
        <p id="date-error" style={{ color: "red", fontSize: "0.8em" }}>
          Please choose a valid date (not in the past).
        </p>
      )}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={handleTimeChange}
        required
        aria-invalid={!isTimeValid}
        aria-describedby="time-error"
      >
        <option value="" disabled hidden>
          Select a time
        </option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime}>{availableTime}</option>
        ))}
      </select>
      {!isTimeValid && (
        <p id="time-error" style={{ color: "red", fontSize: "0.8em" }}>
          Please select a time.
        </p>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
        required
        aria-invalid={!isGuestsValid}
        aria-describedby="guests-error"
      />
      {!isGuestsValid && (
        <p id="guests-error" style={{ color: "red", fontSize: "0.8em" }}>
          Number of guests must be between 1 and 10.
        </p>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option value="" disabled hidden>
          Select an occasion (Optional)
        </option>
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" disabled={!isFormValid}>
        Make Your reservation
      </button>
    </form>
  );
}

export default BookingForm;
