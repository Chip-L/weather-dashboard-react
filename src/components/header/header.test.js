import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "./header";

describe("header", () => {
  it("renders 'Weather Dashboard' text", () => {
    render(<Header />);
    const headingElement = screen.getByText(/Weather Dashboard/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("renders a heading", () => {
    render(<Header />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });
});
