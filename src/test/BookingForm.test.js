import { render, screen, fireEvent, act } from "@testing-library/react";
import BookingForm from "../components/pages/booking/BookingForm";

const mockAvailableTimes = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

const renderBookingForm = (props = {}) => {
  let rendered;
  act(() => {
    rendered = render(
      <BookingForm
        availableTimes={props.availableTimes || mockAvailableTimes}
        dispatch={props.dispatch || mockDispatch}
        submitForm={props.submitForm || mockSubmitForm}
      />
    );
  });
  return rendered;
};

const today = new Date().toISOString().split("T")[0];

describe("BookingForm Component Tests", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
    mockSubmitForm.mockClear();
  });

  test('Renders the "Choose date" label', () => {
    renderBookingForm();
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
  });

  test("The BookingForm component can be submitted by the user", () => {
    renderBookingForm();

    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, { target: { value: "2025-07-20" } });

    const timeSelect = screen.getByLabelText("Choose time");
    fireEvent.change(timeSelect, { target: { value: "18:00" } });

    const guestsInput = screen.getByLabelText("Number of guests");
    fireEvent.change(guestsInput, { target: { value: "4" } });

    const occasionSelect = screen.getByLabelText("Occasion");
    fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: "2025-07-20",
      time: "18:00",
      guests: 4,
      occasion: "Anniversary",
    });
  });

  describe("BookingForm HTML5 Validation Attributes", () => {
    beforeEach(() => {
      renderBookingForm();
    });

    test("date input has correct HTML5 attributes", () => {
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute("type", "date");
      expect(dateInput).toHaveAttribute("required");
      expect(dateInput).toHaveAttribute("min", today);
      expect(dateInput).toHaveValue(today);
    });

    test("time select has correct HTML5 attributes and default option", () => {
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toHaveAttribute("required");

      const defaultOption = screen.getByText(/select a time/i);
      expect(defaultOption).toBeInTheDocument();
      expect(defaultOption).toHaveValue("");
      expect(defaultOption).toBeDisabled();
      expect(defaultOption).toHaveAttribute("hidden");
    });

    test("guests input has correct HTML5 attributes", () => {
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute("type", "number");
      expect(guestsInput).toHaveAttribute("required");
      expect(guestsInput).toHaveAttribute("min", "1");
      expect(guestsInput).toHaveAttribute("max", "10");
      expect(guestsInput).toHaveValue(1);
    });

    test("occasion select does not have required attribute", () => {
      const occasionSelect = screen.getByLabelText(/occasion/i);
      expect(occasionSelect).not.toHaveAttribute("required");

      const defaultOption = screen.getByText(
        /select an occasion \(optional\)/i
      );
      expect(defaultOption).toBeInTheDocument();
      expect(defaultOption).toHaveValue("");
      expect(defaultOption).toBeDisabled();
      expect(defaultOption).toHaveAttribute("hidden");
    });

    test("submit button exists", () => {
      const submitButton = screen.getByRole("button", {
        name: /make your reservation/i,
      });
      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toHaveAttribute("type", "submit");
    });
  });

  describe("BookingForm JavaScript Validation Functions", () => {
    beforeEach(() => {
      renderBookingForm();
      mockDispatch.mockClear();
    });

    test("date input becomes valid for future date", () => {
      const dateInput = screen.getByLabelText(/choose date/i);
      const futureDate = "2025-12-25";
      fireEvent.change(dateInput, { target: { value: futureDate } });
      expect(dateInput).toHaveValue(futureDate);
      expect(
        screen.queryByText(/please choose a valid date/i)
      ).not.toBeInTheDocument();
      expect(dateInput).not.toHaveAttribute("aria-invalid", "true");
    });

    test("date input shows error for past date", () => {
      const dateInput = screen.getByLabelText(/choose date/i);
      const pastDate = "2020-01-01";
      fireEvent.change(dateInput, { target: { value: pastDate } });
      expect(dateInput).toHaveValue(pastDate);
      expect(
        screen.getByText(/please choose a valid date/i)
      ).toBeInTheDocument();
      expect(dateInput).toHaveAttribute("aria-invalid", "true");
    });

    test("time select becomes valid on selection", () => {
      const timeSelect = screen.getByLabelText(/choose time/i);
      fireEvent.change(timeSelect, {
        target: { value: mockAvailableTimes[0] },
      });
      expect(timeSelect).toHaveValue(mockAvailableTimes[0]);
      expect(
        screen.queryByText(/please select a time/i)
      ).not.toBeInTheDocument();
      expect(timeSelect).not.toHaveAttribute("aria-invalid", "true");
    });

    test("time select shows error if no valid option is selected", () => {
      const timeSelect = screen.getByLabelText(/choose time/i);
      fireEvent.change(timeSelect, { target: { value: "" } });
      expect(timeSelect).toHaveValue("");
      expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
      expect(timeSelect).toHaveAttribute("aria-invalid", "true");
    });

    test("guests input becomes valid for numbers between 1 and 10", () => {
      const guestsInput = screen.getByLabelText(/number of guests/i);

      fireEvent.change(guestsInput, { target: { value: "5" } });
      expect(guestsInput).toHaveValue(5);
      expect(
        screen.queryByText(/guests must be between 1 and 10/i)
      ).not.toBeInTheDocument();
      expect(guestsInput).not.toHaveAttribute("aria-invalid", "true");

      fireEvent.change(guestsInput, { target: { value: "1" } });
      expect(guestsInput).toHaveValue(1);
      expect(
        screen.queryByText(/guests must be between 1 and 10/i)
      ).not.toBeInTheDocument();

      fireEvent.change(guestsInput, { target: { value: "10" } });
      expect(guestsInput).toHaveValue(10);
      expect(
        screen.queryByText(/guests must be between 1 and 10/i)
      ).not.toBeInTheDocument();
    });

    test("guests input shows error for numbers outside 1-10 range", () => {
      const guestsInput = screen.getByLabelText(/number of guests/i);

      fireEvent.change(guestsInput, { target: { value: "0" } });
      expect(guestsInput).toHaveValue(0);
      expect(
        screen.getByText(/guests must be between 1 and 10/i)
      ).toBeInTheDocument();
      expect(guestsInput).toHaveAttribute("aria-invalid", "true");

      fireEvent.change(guestsInput, { target: { value: "11" } });
      expect(guestsInput).toHaveValue(11);
      expect(
        screen.getByText(/guests must be between 1 and 10/i)
      ).toBeInTheDocument();
      expect(guestsInput).toHaveAttribute("aria-invalid", "true");
    });

    test("guests input shows error for non-numeric input", () => {
      const guestsInput = screen.getByLabelText(/number of guests/i);
      fireEvent.change(guestsInput, { target: { value: "abc" } });
      expect(guestsInput).toHaveValue(null);
      expect(
        screen.getByText(/guests must be between 1 and 10/i)
      ).toBeInTheDocument();
      expect(guestsInput).toHaveAttribute("aria-invalid", "true");
    });

    test("dispatch is called when date changes", () => {
      const dateInput = screen.getByLabelText(/choose date/i);
      const newDate = "2025-11-15";
      fireEvent.change(dateInput, { target: { value: newDate } });

      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenCalledWith({
        type: "UPDATE_TIMES",
        payload: { date: newDate },
      });
    });
  });
});
