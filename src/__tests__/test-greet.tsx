import { render, screen } from "@testing-library/react";
import Greet from "../components/greet/Greet";

/**
 * * We can group different test files inside a folder __tests__ ,
 * * But better approach is always keep your test files close
 * * to component file itself.
 */
describe("Greet v2", () => {
  test("Checks letter H", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});
