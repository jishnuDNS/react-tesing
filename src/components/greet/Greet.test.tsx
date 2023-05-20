import React from "react";
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Should render greetings message", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Should render name with greetings", () => {
  render(<Greet name="jishnu" />);
  const textElement = screen.getByText("Hello jishnu");
  expect(textElement).toBeInTheDocument();
});
