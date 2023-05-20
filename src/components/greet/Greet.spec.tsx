import React from "react";
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet v2", () => {
  test("Checks letter H", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});
