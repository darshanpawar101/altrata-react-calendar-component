import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders calendar component", () => {
  it("should render the calendar component", () => {
    render(<App />);
    const calendarComponent = screen.getByTestId("calendar-component");
    expect(calendarComponent).toBeInTheDocument();
  });
});
