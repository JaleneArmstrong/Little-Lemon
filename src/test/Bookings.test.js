import { render, screen } from "@testing-library/react";
import BookingPage from "../components/pages/booking/BookingsPage";

test("Renders the BookingPage heading", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();
  render(
    <BookingPage availableTimes={availableTimes} dispatch={mockDispatch} />
  );

  const headingElement = screen.getByText(/book a table/i);
  expect(headingElement).toBeInTheDocument();
});
