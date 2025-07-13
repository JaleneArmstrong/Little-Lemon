import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/pages/booking/BookingForm";

test('Renders the "Choose date" label', () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();
  render(
    <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
  );
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test("The BookingForm component can be submitted by the user", () => {
  const availableTimes = ["17:00", "18:00"];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

  const dateInput = screen.getByLabelText("Choose date");
  fireEvent.change(dateInput, { target: { value: "2024-07-20" } });

  const timeSelect = screen.getByLabelText("Choose time");
  fireEvent.change(timeSelect, { target: { value: "18:00" } });

  const guestsInput = screen.getByLabelText("Number of guests");
  fireEvent.change(guestsInput, { target: { value: "4" } });

  const occasionSelect = screen.getByLabelText("Occasion");
  fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: "2024-07-20",
    time: "18:00",
    guests: "4",
    occasion: "Anniversary",
  });
});
