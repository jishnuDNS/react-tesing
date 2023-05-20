import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

/**
 * @param We can use .spec.tsx file type convention as well
 */
describe("Greet v2", () => {
  test("Checks letter H", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});
