import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";

describe("Calendar Component", () => {
  describe("Basic Rendering", () => {
    it("should render the calendar component", () => {
      render(<Calendar date="03/11/2025" />);
      const monthYear = screen.getByTestId("month-year");
      expect(monthYear).toBeInTheDocument();
    });

    it("should render with default date when no date prop is provided", () => {
      render(<Calendar />);
      const monthYear = screen.getByTestId("month-year");
      expect(monthYear).toBeInTheDocument();
    });

    it("should render weekday headers", () => {
      render(<Calendar date="03/11/2025" />);

      expect(screen.getByTestId("weekday-0")).toHaveTextContent("Su");
      expect(screen.getByTestId("weekday-1")).toHaveTextContent("Mo");
      expect(screen.getByTestId("weekday-2")).toHaveTextContent("Tu");
      expect(screen.getByTestId("weekday-3")).toHaveTextContent("We");
      expect(screen.getByTestId("weekday-4")).toHaveTextContent("Th");
      expect(screen.getByTestId("weekday-5")).toHaveTextContent("Fr");
      expect(screen.getByTestId("weekday-6")).toHaveTextContent("Sa");
    });
  });

  describe("Month and Year Display", () => {
    it("should display correct month and year for November 2025", () => {
      render(<Calendar date="03/11/2025" />);
      const monthYear = screen.getByTestId("month-year");
      expect(monthYear).toHaveTextContent("November 2025");
    });

    it("should display correct month and year for March 2020", () => {
      render(<Calendar date="23/03/2020" />);
      const monthYear = screen.getByTestId("month-year");
      expect(monthYear).toHaveTextContent("March 2020");
    });

    it("should display correct month and year for October 2022", () => {
      render(<Calendar date="03/10/2022" />);
      const monthYear = screen.getByTestId("month-year");
      expect(monthYear).toHaveTextContent("October 2022");
    });

    it("should display correct month and year for January", () => {
      render(<Calendar date="15/01/2024" />);
      const monthYear = screen.getByTestId("month-year");
      expect(monthYear).toHaveTextContent("January 2024");
    });

    it("should display correct month and year for December", () => {
      render(<Calendar date="25/12/2023" />);
      const monthYear = screen.getByTestId("month-year");
      expect(monthYear).toHaveTextContent("December 2023");
    });
  });

  describe("Date Highlighting", () => {
    it("should highlight the correct date (3rd November 2025)", () => {
      render(<Calendar date="03/11/2025" />);
      const days = screen.getAllByTestId(/^day-/);

      const highlightedDay = days.find((day) =>
        day.className.includes("bg-blue-300")
      );

      expect(highlightedDay).toBeInTheDocument();
      expect(highlightedDay).toHaveTextContent("3");
      expect(highlightedDay).toHaveClass(
        "text-gray-950",
        "bg-blue-300",
        "font-bold"
      );
    });

    it("should highlight the correct date (23rd March 2020)", () => {
      render(<Calendar date="23/03/2020" />);
      const days = screen.getAllByTestId(/^day-/);

      const highlightedDay = days.find((day) =>
        day.className.includes("bg-blue-300")
      );

      expect(highlightedDay).toBeInTheDocument();
      expect(highlightedDay).toHaveTextContent("23");
      expect(highlightedDay).toHaveClass(
        "text-gray-950",
        "bg-blue-300",
        "font-bold"
      );
    });

    it("should highlight the correct date (3rd October 2022)", () => {
      render(<Calendar date="03/10/2022" />);
      const days = screen.getAllByTestId(/^day-/);

      const highlightedDay = days.find((day) =>
        day.className.includes("bg-blue-300")
      );

      expect(highlightedDay).toBeInTheDocument();
      expect(highlightedDay).toHaveTextContent("3");
      expect(highlightedDay).toHaveClass(
        "text-gray-950",
        "bg-blue-300",
        "font-bold"
      );
    });

    it("should highlight the first day of the month", () => {
      render(<Calendar date="01/06/2024" />);
      const days = screen.getAllByTestId(/^day-/);

      const highlightedDay = days.find((day) =>
        day.className.includes("bg-blue-300")
      );

      expect(highlightedDay).toBeInTheDocument();
      expect(highlightedDay).toHaveTextContent("1");
      expect(highlightedDay).toHaveClass(
        "text-gray-950",
        "bg-blue-300",
        "font-bold"
      );
    });

    it("should highlight the last day of the month (31st)", () => {
      render(<Calendar date="31/01/2024" />);
      const days = screen.getAllByTestId(/^day-/);

      const highlightedDay = days.find((day) =>
        day.className.includes("bg-blue-300")
      );

      expect(highlightedDay).toBeInTheDocument();
      expect(highlightedDay).toHaveTextContent("31");
      expect(highlightedDay).toHaveClass(
        "text-gray-950",
        "bg-blue-300",
        "font-bold"
      );
    });
  });

  describe("Calendar Days Display", () => {
    it("should display all days for the current month", () => {
      render(<Calendar date="15/11/2025" />);
      const days = screen.getAllByTestId(/^day-/);

      const novemberDays = days.filter((day) => {
        const text = day.textContent;
        return text && text.trim() !== "";
      });

      expect(novemberDays.length).toBeGreaterThan(0);
      expect(novemberDays.length).toEqual(30);
    });

    it("should display correct number of calendar cells (35 or 42)", () => {
      render(<Calendar date="03/11/2025" />);
      const days = screen.getAllByTestId(/^day-/);

      expect([35, 42]).toContain(days.length);
    });

    it("should show only current month dates with numbers", () => {
      render(<Calendar date="15/11/2025" />);
      const days = screen.getAllByTestId(/^day-/);

      const daysWithContent = days.filter((day) => day.textContent?.trim());

      // November has 30 days
      expect(daysWithContent.length).toBeGreaterThanOrEqual(30);
    });
  });

  describe("Date Prop Formats", () => {
    it("should accept Date object as prop", () => {
      const dateObj = new Date(2024, 5, 15);
      render(<Calendar date={dateObj} />);
      const monthYear = screen.getByTestId("month-year");
      expect(monthYear).toHaveTextContent("June 2024");
    });

    it("should accept string date in DD/MM/YYYY format", () => {
      render(<Calendar date="15/06/2024" />);
      const monthYear = screen.getByTestId("month-year");
      expect(monthYear).toHaveTextContent("June 2024");
    });
  });

  describe("Edge Cases", () => {
    it("should handle February in a leap year (2024)", () => {
      render(<Calendar date="15/02/2024" />);
      const monthYear = screen.getByTestId("month-year");
      expect(monthYear).toHaveTextContent("February 2024");

      const days = screen.getAllByTestId(/^day-/);
      const febDays = days.filter((day) => day.textContent?.trim());

      expect(febDays.length).toBeGreaterThanOrEqual(29);
    });

    it("should handle February in a non-leap year (2023)", () => {
      render(<Calendar date="15/02/2023" />);
      const monthYear = screen.getByTestId("month-year");
      expect(monthYear).toHaveTextContent("February 2023");

      const days = screen.getAllByTestId(/^day-/);
      const febDays = days.filter((day) => day.textContent?.trim());

      expect(febDays.length).toEqual(28);
    });

    it("should handle months with 31 days", () => {
      render(<Calendar date="15/01/2024" />);
      const days = screen.getAllByTestId(/^day-/);
      const janDays = days.filter((day) => day.textContent?.trim());

      expect(janDays.length).toEqual(31);
    });

    it("should handle months with 30 days", () => {
      render(<Calendar date="15/04/2024" />);
      const days = screen.getAllByTestId(/^day-/);
      const aprilDays = days.filter((day) => day.textContent?.trim());

      expect(aprilDays.length).toEqual(30);
    });

    it("should handle year transitions (December to January)", () => {
      render(<Calendar date="31/12/2023" />);
      const monthYear = screen.getByTestId("month-year");
      expect(monthYear).toHaveTextContent("December 2023");

      const days = screen.getAllByTestId(/^day-/);
      const highlightedDay = days.find((day) =>
        day.className.includes("bg-blue-300")
      );

      expect(highlightedDay).toHaveTextContent("31");
    });
  });

  describe("Week Alignment", () => {
    it("should align dates with correct day of the week", () => {
      render(<Calendar date="03/11/2025" />);

      const days = screen.getAllByTestId(/^day-/);
      const highlightedDay = days.find((day) =>
        day.className.includes("bg-blue-300")
      );

      const highlightedIndex = days.indexOf(highlightedDay!);

      const dayOfWeek = (highlightedIndex - 7) % 7;

      expect(dayOfWeek).toBe(1);
    });

    it("should start weeks on Sunday", () => {
      render(<Calendar date="03/11/2025" />);
      const weekday0 = screen.getByTestId("weekday-0");
      expect(weekday0).toHaveTextContent("Su");
    });

    it("should end weeks on Saturday", () => {
      render(<Calendar date="03/11/2025" />);
      const weekday6 = screen.getByTestId("weekday-6");
      expect(weekday6).toHaveTextContent("Sa");
    });
  });

  describe("Styling and Classes", () => {
    it("should apply highlight styles to selected date", () => {
      render(<Calendar date="03/11/2025" />);
      const days = screen.getAllByTestId(/^day-/);

      const highlightedDay = days.find((day) =>
        day.className.includes("bg-blue-300")
      );

      expect(highlightedDay).toHaveClass("text-gray-950");
      expect(highlightedDay).toHaveClass("bg-blue-300");
      expect(highlightedDay).toHaveClass("font-bold");
    });

    it("should not apply highlight styles to non-selected dates", () => {
      render(<Calendar date="03/11/2025" />);
      const days = screen.getAllByTestId(/^day-/);

      const nonHighlightedDays = days.filter(
        (day) => !day.className.includes("bg-blue-300")
      );

      expect(nonHighlightedDays.length).toBeGreaterThan(0);

      nonHighlightedDays.forEach((day) => {
        expect(day).not.toHaveClass("bg-blue-300");
      });
    });

    it("should have grid layout for calendar", () => {
      render(<Calendar date="03/11/2025" />);
      const weeksContainer = screen.getByTestId("weeks");
      expect(weeksContainer).toHaveClass("grid", "grid-cols-7");
    });
  });

  describe("Reusability", () => {
    it("should render multiple calendars with different dates independently", () => {
      const { rerender } = render(<Calendar date="03/11/2025" />);
      let monthYear = screen.getByTestId("month-year");
      expect(monthYear).toHaveTextContent("November 2025");

      rerender(<Calendar date="15/06/2024" />);
      monthYear = screen.getByTestId("month-year");
      expect(monthYear).toHaveTextContent("June 2024");

      rerender(<Calendar date="25/12/2023" />);
      monthYear = screen.getByTestId("month-year");
      expect(monthYear).toHaveTextContent("December 2023");
    });

    it("should update when date prop changes", () => {
      const { rerender } = render(<Calendar date="03/11/2025" />);

      let days = screen.getAllByTestId(/^day-/);
      let highlightedDay = days.find((day) =>
        day.className.includes("bg-blue-300")
      );
      expect(highlightedDay).toHaveTextContent("3");

      rerender(<Calendar date="15/11/2025" />);

      days = screen.getAllByTestId(/^day-/);
      highlightedDay = days.find((day) =>
        day.className.includes("bg-blue-300")
      );
      expect(highlightedDay).toHaveTextContent("15");
    });
  });
});
