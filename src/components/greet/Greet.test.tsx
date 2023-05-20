import React from "react";
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("Renders greetings message", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("Render name with greetings", () => {
    render(<Greet name="jishnu" />);
    const textElement = screen.getByText("Hello jishnu");
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested test", () => {
    test("Nested greet", () => {
      render(<Greet />);
      const textElement = screen.getByText("Hello");
      expect(textElement).toBeInTheDocument();
    });
  });
});

describe("Greet v2", () => {
  test("Checks letter H", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});
